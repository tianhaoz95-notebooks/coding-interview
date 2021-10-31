# 2057. Smallest Index With Equal Value

```python
class Solution:
    def isValid(self, nums: List[int], idx: int) -> bool:
        return (idx % 10) == nums[idx]
    
    def smallestEqual(self, nums: List[int]) -> int:
        for i in range(len(nums)):
            if self.isValid(nums, i):
                return i
        return -1
```
