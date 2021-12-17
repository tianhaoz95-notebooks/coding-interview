# 1854. Maximum Population Year

```python
class Solution(object):
  def maximumPopulation(self, logs):
    cnt = [0 for i in range(2060)]
    for log in logs:
      for i in range(log[0], log[1], 1):
        cnt[i] += 1
    return cnt.index(max(cnt))
```
