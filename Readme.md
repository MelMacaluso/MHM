# MHM.js - Utility Framework

tl;dr: MHM.js is a lightweight utility framework that streamlines simple tasks without the need to write javascript working through your html codebase.

## **Classes Toggler**

**Target**
To be placed in the dom element to toggle

```html
<div data-mhm-id="TargetExample"></div>
```

**Toggler Target**
To fill in with the dom element to toggle

```html
<button
  data-mhm-toggle-target="TargetExample"
  data-mhm-toggle-class="your-class-to-toggle"
></button>
```

**Toggler Class**
To fill in with the class to toggle

```html
<button data-mhm-toggle-class="your-class-to-toggle"></button>
```

Full Example:

```html
<div data-mhm-id="TargetExample"></div>

<button
  data-mhm-toggle-target="TargetExample"
  data-mhm-toggle-class="your-class-to-toggle"
></button>
```
