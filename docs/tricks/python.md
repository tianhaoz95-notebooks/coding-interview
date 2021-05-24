---
sidebar_position: 3
---

# Python

## Initialization

### Set and dict

When initializing a empty `set` or `dict` in Python, it's better to implicitly say if it's a set or dict instead of using `{}` (which is a `dict` btw).

There are a few benefits in doing so:

* It's more readable.
* It's less likely to catch you off guard when you want to use `set`.

```python
# Do
my_set = set()
my_dict = dict()

# Don't
# This will be a dict and might catch you off guard
my_what = {}
```

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
