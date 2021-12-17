# 1866. Number of Ways to Rearrange Sticks With K Sticks Visible

For `n=3, k=2`:

|   🚀   | `j0`  |              `j1`               |               `j2`               |
| :---: | :---: | :-----------------------------: | :------------------------------: |
| `i0`  |  `0`  |               `0`               |               `0`                |
| `i1`  |  `0`  |               `1`               | `dp(0,2) * (1-1) + dp(0, 1) = 0` |
| `i2`  |  `0`  | `dp(1,1) * (2-1) + dp(1,0) = 1` | `dp(1,2) * (2-1) + dp(1,1) = 1`  |
| `i3`  |  `0`  | `dp(2,1) * (3-1) + dp(2,0) = 2` | `dp(2,2) * (3-1) + dp(2,1) = 3`  |

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
