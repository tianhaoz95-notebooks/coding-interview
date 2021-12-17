# 1865. Finding Pairs With a Certain Sum

```python
from collections import Counter

class FindSumPairs:

    def __init__(self, nums1: List[int], nums2: List[int]):
        self.a = nums1
        self.b = nums2
        self.m = Counter()
        for e in self.b:
            self.m[e] += 1

    def add(self, index: int, val: int) -> None:
        self.m[self.b[index]] -= 1
        self.b[index] += val
        self.m[self.b[index]] += 1

    def count(self, tot: int) -> int:
        cnt = 0
        for v in self.a:
            cnt += self.m[tot - v]
        return cnt
```
