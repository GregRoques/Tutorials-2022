const user_map = {
  1: { name: "Midnight" },
  2: { name: "Callie" },
};

console.log(user_map[1]);

const userMap = new Map([
  [1, { name: "Midnight" }],
  [5, { name: "Callie" }],
]); // takes an array of arrays, with the first value of each sub-array be the key, and the second being the value

console.log(userMap);

userMap.delete(1);
userMap.set(1, { name: "Lil' Nacheaux" });
console.log(userMap);

// ===============================================

const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size); // 3

// getting the values
console.log(myMap.get(keyString)); // "value associated with 'a string'"
console.log(myMap.get(keyObj)); // "value associated with keyObj"
console.log(myMap.get(keyFunc)); // "value associated with keyFunc"

console.log(myMap.get("a string")); // "value associated with 'a string'", because keyString === 'a string'
console.log(myMap.get({})); // undefined, because keyObj !== {}
console.log(myMap.get(function () {})); // undefined, because keyFunc !== function () {}
