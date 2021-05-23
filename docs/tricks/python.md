---
sidebar_position: 3
---

# Python

## Initialization

### List

#### Size copy

Size copy a list and fill with elements:

```python
my_list = [0 for i in range(other_list)]

my_list = [0] * len(other_list)
```

With custom first several elements:

```python
my_list = [0, 1] + [0] * len(other_list[2:])
```

:::tip
This can be useful for DP-based problems.
:::
