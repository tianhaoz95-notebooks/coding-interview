# 1871. Jump Game VII

```python
class Solution:
  def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
    reachable = [True] + [False] * len(s[1:])
    cnts = [0, 1] + [0] * len(s)
    for i in range(1, len(s)):
      cnts[i + 1] = cnts[i]
      if s[i] == '0':
        l = max(i - maxJump, 0)
        r = max(i - minJump + 1, 0)
        if cnts[l] < cnts[r]: 
          reachable[i] = True
          cnts[i + 1] += 1
    return reachable[-1]
```