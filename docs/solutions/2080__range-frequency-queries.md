# 2080. Range Frequency Queries

```python
class RangeFreqQuery(object):

    def __init__(self, arr):
        """
        :type arr: List[int]
        """
        self.t = []
        d = dict()
        for i, v in enumerate(arr):
            if v not in d:
                d[v] = 0
            d[v] += 1
            # (number, current_cnt)
            self.t.append((v, d[v]))
        # print(self.t)
        

    def query(self, left, right, value):
        """
        :type left: int
        :type right: int
        :type value: int
        :rtype: int
        """
        init_cnt = 0
        left -= 1
        while left >= 0:
            val, cnt = self.t[left]
            if val == value:
                # print('left: ', self.t[left])
                init_cnt = cnt
                break
            left -= 1
        final_cnt = 0
        while right > left:
            val, cnt = self.t[right]
            if val == value:
                # print('right: ', self.t[right])
                final_cnt = cnt
                break
            right -= 1
        return max(final_cnt - init_cnt, 0)


# Your RangeFreqQuery object will be instantiated and called as such:
# obj = RangeFreqQuery(arr)
# param_1 = obj.query(left,right,value)
```
