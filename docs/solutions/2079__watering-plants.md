# 2079. Watering Plants

```python
class Solution(object):
    def wateringPlants(self, plants, capacity):
        """
        :type plants: List[int]
        :type capacity: int
        :rtype: int
        """
        steps = 0
        refill = False
        water = capacity
        for i, p in enumerate(plants):
            if water >= p:
                water -= p
                steps += 1
            else:
                steps += (2 * i + 1)
                water = capacity - p
        return steps
        
```
