# 1855. Maximum Distance Between a Pair of Values


```python
class Solution:
  def maxDistance(self, nums1: List[int], nums2: List[int]) -> int:
    max_dist = 0
    j = 0
    for i, v in enumerate(nums1):
      j = max(i, j)
      while j + 1 < len(nums2) and v <= nums2[j + 1]:
        j += 1
      max_dist = max(max_dist, j - i)
    return max_dist
```