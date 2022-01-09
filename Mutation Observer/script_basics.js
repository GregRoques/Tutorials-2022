const mutationObserver = new MutationObserver((entries) => {
  console.log(entries);
});

const parent = document.querySelector(".parent"); // element to observe
const options = { childList: true }; // what we are observing on element... in this case, its children

mutationObserver.observe(parent, options);

setTimeout(() => {
  parent.children[0].remove(); // here, we are mutating the element, so we should see that console.log()
}, 1000);

setTimeout(() => {
  var newDiv = document.createElement("div");
  newDiv.classList.add("child");
  var newDivText = document.createTextNode("Child 4");
  newDiv.appendChild(newDivText);
  newDiv.contentEditable = "true";
  parent.appendChild(newDiv);
}, 2000);

// NOTE: if we were to remove the setTimeOuts and have these changes happen at the exact same time, they would appear inside a single array.

mutationObserver.disconnect(); // stops observations
