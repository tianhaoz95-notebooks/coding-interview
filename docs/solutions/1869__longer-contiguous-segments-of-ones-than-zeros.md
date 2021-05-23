# 1869. Longer Contiguous Segments of Ones than Zeros

```python
class Solution:
  def checkZeroOnes(self, s: str) -> bool:
    max_cnt = {'1': 0, '0': 0}
    curr, cnt = s[0], 1
    for i, v in enumerate(s[1:] + 'x'):
      if v == curr:
        cnt += 1
      else:
        max_cnt[curr] = max(max_cnt[curr], cnt)
        curr, cnt = v, 1
    return max_cnt['1'] > max_cnt['0']
```
