const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector(".parent"); // element to observe
const options = {
  subtree: true,
  attributes: true,
};
// subtree observes ALL of the children within the element
// looks for text within data
// keeps track of original value... see console.log()

mutationObserver.observe(parent, options);

// text is a node on the element (div), so we need to look at the childNode of the child div... hence parent.children[0].childNodes[0]

parent.id = "New ID";
parent.children[0].id = "New Child ID";
