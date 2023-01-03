console.log("Hello, my friend %cMidnight", "color:blue;font-size:30px;");

// ====================================================================
// console.warn()

for (let i = 0; i < 50; i++) {
  console.log(`i: ${i}`);

  if (i === 16) {
    console.warn(`Uh-Oh: ${i}`);
  }
}

// ====================================================================
//console.error()

// ajax()
//   .then((res) => {
//     console.log("success");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// NOTE: Can also print a stacked relationship of calls:

const a = () => {
  console.error("error");
};
const b = () => {
  a();
};
const c = () => {
  b();
};
c();

// ====================================================================
//console.time()

let counter = 0;

console.time();
for (let i = 0; i < 10000000000; i++) {
  counter++;
}
console.timeEnd();

// prints: "default: time in ms"

// Note: can also give it a flag for multiple pieces of code
let count = 0;

console.time("time1");

for (let i = 0; i < 1000000000; i++) {
  count++;
}

console.timeEnd("time1");

console.time("time2");

for (let i = 0; i < 1000000000; i++) {
  count++;
}

console.timeEnd("time2");

// prints:
/*
time1: time in ms
time2: time in ms
*/

// ====================================================================
//console.table()

const foods = [
  {
    name: "🍔",
    price: 30.89,
    group: 1,
  },
  {
    name: "🍨",
    price: 20.71,
    group: 1,
  },
  {
    name: "🍿",
    price: 10.31,
    group: 2,
  },
  {
    name: "🍵",
    price: 5.98,
    group: 2,
  },
];

console.table(foods);
