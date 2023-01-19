const array = ["one", "two", "three"];

const f = new Intl.ListFormat(
  "en-us", // will write conjunction in spanish if en-sp
  { type: "disjunction" }
);

console.log(array.join(", ")); // one, two, three

console.log(f.format(array)); // one, two, or three
// if no type or style specified: one two and three
// {style: "short"}: one, two & three
// {style: "narrow"}: one, two, three... just like '.join(", ")'
