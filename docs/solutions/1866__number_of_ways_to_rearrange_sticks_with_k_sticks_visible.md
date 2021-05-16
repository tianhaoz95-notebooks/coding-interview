# 1866. Number of Ways to Rearrange Sticks With K Sticks Visible

```python
class Solution:
    def rearrangeSticks(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        dp = [[0 for i in range(k + 1)] for j in range(n + 1)]
        dp[1][1] = 1
        for i in range(2, n + 1):
            for j in range(1, k + 1):
                dp[i][j] = dp[i - 1][j] * (i - 1) % mod + dp[i - 1][j - 1]
                if dp[i][j] >= mod:
                    dp[i][j] -= mod
        return dp[n][k]
```