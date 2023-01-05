# Closures

- A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- **In other words:** _a closure gives you access to an outer function's scope from an inner function_.
- In JavaScript, **_closures are created every time a function is created, at function creation time_**.

## Practical Example

- **Task:** add buttons to a page to adjust the text size.

```
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}

const size12 = makeSizer(12);
const size14 = makeSizer(14);
const size16 = makeSizer(16);
```

- **size12**, **size14**, and **size16** are now functions that resize the body text to 12, 14, and 16 pixels, respectively. You can attach them to buttons (in this case hyperlinks) as demonstrated in the following code example.

```
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```

**HTML:**

```
<button id="size-12">12</button>
<button id="size-14">14</button>
<button id="size-16">16</button>
``
```
