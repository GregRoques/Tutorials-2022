function range(start, end, step = 1) {
  return {
    next() {
      if (start < end) {
        start += step;
        return { value: start, done: false };
      }
      return { done: true, value: end };
    },
  };
} // recreation of Java range method, which returns a sequential ordered IntStream from startInclusive to endExclusive by an incremental step of 1.

// ============================================ JS generator declaration can handle this also:

function* gen() {
  // like above, updates value each time
  yield 1;
  yield 2;
  yield 3;
}

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// ============================================ infinite iterator

function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
