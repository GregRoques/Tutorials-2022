# Strict Mode
[Strict Mode Vid](https://www.youtube.com/watch?v=G9QTBS2x8U4&t=151s)

## Reasons to use strict mode

### Catching Errors:
1. Throws spell check for defined variables
2. Throws error when you try to set a "readOnly" window value
3. Throws error when you try to delete a window property
4. Catches defining variables with the same name
5. Catches incorrect use of Octal numbers (0 in front of positive numbers)... must use "0o + YOU_NUMBER" to use Octal numbers in Strict mode
6. Catches incorrect use of primitive values

### Security
1. When using "this" in a function, you must bind "this" to the function; when called, will only return the function properties, not the global properties. Prevents browsers from getting the window properties by default.

**Example:**

```
"use strict"

function sum(a,b){
    console.log(this) // returns 10
    return a + b
}

console.log(sum.bind(10)(1,2)) // returns 3

```

2. Prevents arguments from changing when local variables passed

```
"use strict"

function sum(a,b){
    a = 10
    return [a + b, arguments[0] + arguments[1]]
}

console.log(1,2)) 

// Not in Strict Mode: returns [12,12]
// Strict Mode: [12,3]... arguments reads what was passed before the local change

```

# Modules
[Module Vid](https://www.youtube.com/watch?v=cRHQNNcYf6s)

- Modules use "defer" by default... which waits until all elements and scripts have loaded to run
- Modules uses "strict mode" by default