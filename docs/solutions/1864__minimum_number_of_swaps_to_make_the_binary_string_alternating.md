# 1864. Minimum Number of Swaps to Make the Binary String Alternating

```python
from collections import Counter

class Solution:
    def flip(self, prev: str) -> str:
        if prev == "0":
            return "1"
        return "0"
    
    def countDiff(self, start: str, s: str) -> int:
        current = start
        cnt = 0
        for c in s:
            if c != current:
                cnt += 1
            current = self.flip(current)
        return cnt
    
    def minSwaps(self, s: str) -> int:
        cnts = Counter(s)
        one_cnt = cnts["1"]
        zero_cnt = cnts["0"]
        if abs(one_cnt - zero_cnt) > 1:
            return -1
        if one_cnt > zero_cnt:
            return self.countDiff("1", s) // 2
        if one_cnt < zero_cnt:
            return self.countDiff("0", s) // 2
        return min(self.countDiff("0", s), self.countDiff("1", s)) // 2
```
