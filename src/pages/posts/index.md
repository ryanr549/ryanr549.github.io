---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: Hello world!
publishDate: 26 June 2022
name: Haoran Yu
value: 128
description: Just a Hello World Post!
---

<Cool name={frontmatter.name} href="https://github.com/ryanr549" client:load />

# A markdown page
```sh
sudo pacman -Syu
```
`a,b,c,d`
- fast
- efficient
```python
import numpy as np
np.sin(np.pi)
```
Do variables work {frontmatter.value * 2}?

```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}

```
