# 1863. Sum of All Subset XOR Totals

```python
class Solution:
    def subsetXorSumStep(self, last_sum: int, nums: List[int]) -> int:
        if not nums:
            return 0
        current_sum = last_sum^nums[0]
        return current_sum + self.subsetXorSumStep(last_sum, nums[1:]) + self.subsetXorSumStep(current_sum, nums[1:])
    
    def subsetXORSum(self, nums: List[int]) -> int:
        return self.subsetXorSumStep(0, nums)
```
