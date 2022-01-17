const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

// Add Styling to drag event and end
draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    //console.log("Drag Start");
    draggable.classList.add("dragging");
  });
  draggable.addEventListener("dragend", () => {
    //console.log("Drag End");
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    // by default, dropping in an element is prevented
    const afterElement = getDragAfterElement(container, e.clientY);
    //clientY is the Y axis position of passed element
    //console.log(afterElement);

    //console.log("Drag Over");
    const draggable = document.querySelector(".dragging");
    // we know there will only be one of these at a time because it is only applied on 'dragstart',
    // and removed on 'dragend'

    if (!afterElement) {
      container.appendChild(draggable); // append after container child
    } else {
      container.insertBefore(draggable, afterElement); // insert before container child
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  // notice the ":not()"... removes '.dragging' element from class query
  // use spread operator to spread each selection out into new array

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      //console.log(box);
      const offset = y - box.top - box.height / 2;
      // gets the element being dragged's y position in relation to the
      // center (box.top - (box.height / 2), or top - half of the height) of the containter it is over

      // console.log(offset);
      // if we are below element, offset is negative... else, positive
      // we only care about negative numbers, as this means we are currently hovering above an element

      if (offset < 0 && offset > closest.offset) {
        // if less than zero, AND closest to 0

        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
  // we set offset value of reduce to the largest possible number away from our cursor,
  // AND also a negative number as those are the only ones we are tracking:
  // hence, Number APIs 'Number.POSITIVE_INFINITY'
}
