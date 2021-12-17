# 2081. Sum of k-Mirror Numbers

```python
class Solution:
    def kMirror(self, b: int, n: int) -> int:
        res = 0
        cnt = 0
        def get_next_attempt():
            for l in range(30):
                for v in range(10**l,10**(l+1)):
                    s = str(v) + str(v)[::-1][1:]
                    yield int(s)
                for v in range(10**l,10**(l+1)):
                    s = str(v) + str(v)[::-1]
                    yield int(s)
        for num in get_next_attempt():
            new_num = []
            k = 0
            curr = num
            while curr:
                new_num += [curr%b]
                curr //= b
            if new_num == new_num[::-1]:
                res += 1
                cnt += num
            if res == n:
                return cnt
```