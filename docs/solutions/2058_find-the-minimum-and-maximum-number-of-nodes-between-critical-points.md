# 2058. Find the Minimum and Maximum Number of Nodes Between Critical Points

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def getMinDist(self, idx: int, critical_idxs: List[int], cmp_idx: int) -> int:
        if not critical_idxs:
            return -1
        return idx - critical_idxs[cmp_idx]
    
    def isCritical(self, left_node: ListNode, mid_node: ListNode, right_node: ListNode) -> bool:
        if left_node.val < mid_node.val and mid_node.val > right_node.val:
            return True
        if left_node.val > mid_node.val and mid_node.val < right_node.val:
            return True
        return False
    
    def updateMinDist(self, min_dist: int, update_dist: int) -> int:
        if min_dist == -1:
            return update_dist
        return min(min_dist, update_dist)
    
    def nodesBetweenCriticalPoints(self, head: Optional[ListNode]) -> List[int]:
        min_dist = -1
        max_dist = -1
        current_idx = 1
        critical_idxs = []
        if head is None or head.next is None or head.next.next is None:
            return [-1, -1]
        left_node = head
        mid_node = head.next
        right_node = head.next.next
        while right_node:
            if self.isCritical(left_node, mid_node, right_node):
                # update the min max history
                min_dist = self.updateMinDist(min_dist, self.getMinDist(current_idx, critical_idxs, -1))
                max_dist = max(max_dist, self.getMinDist(current_idx, critical_idxs, 0))
                # update the seen critical points
                critical_idxs.append(current_idx)
            # update the pointers
            left_node = left_node.next
            mid_node = mid_node.next
            right_node = right_node.next
            # update index
            current_idx += 1
        return [min_dist, max_dist]
```
