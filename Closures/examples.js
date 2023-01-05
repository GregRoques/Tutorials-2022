function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
// x is set as 5, and the inner anonymous function (with x set) is returned as a new function "assigned" to "add5"
const add10 = makeAdder(10);

console.log(add5(2)); // returns 7
console.log(add10(2)); // returns 12

// =======================================================================================

const counter = (function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

// Notice the assigned "counter" function has access to the privateCounter variable and changeBy function in its lexical state,
// but can only call the functions returned by the anonymous function assigned at function creation time

// =======================================================================================

const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.

// Similar to above, but notice that counter1 and counter2 each have their own lexical environments, maintaining their independence from one another

// Changes to the variable value in one closure don't affect the value in the other closure.
