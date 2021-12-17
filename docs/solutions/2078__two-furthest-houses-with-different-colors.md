# 2078. Two Furthest Houses With Different Colors

```python
class Solution(object):
    def maxDistance(self, colors):
        """
        :type colors: List[int]
        :rtype: int
        """
        max_dist = 0
        # note down a list of (color, first_seen_location)
        tracker = []
        for i, c in enumerate(colors):
            seen = False
            for t in tracker:
                color, first_seen_loc = t
                if color != c:
                    max_dist = max(max_dist, abs(i - first_seen_loc))
                else:
                    seen = True
            if not seen:
                tracker.append((c, i))
        return max_dist
        
```
