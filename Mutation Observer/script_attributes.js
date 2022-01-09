const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector(".parent"); // element to observe
const options = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ["id"],
};
// track attributes (classes, ids, etc.)
// attributeOldValue will also keep track of the previous value (should be "parent")
// attributeFilter: only check for certain atrributes... in this case, the 'id

mutationObserver.observe(parent, options);

parent.id = "New ID";
