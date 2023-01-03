// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

const today = new Date();

const formated = new Intl.DateTimeFormat("es-en", {
  dateStyle: "short",
  timeStyle: "full",
});

console.log(formatted);
