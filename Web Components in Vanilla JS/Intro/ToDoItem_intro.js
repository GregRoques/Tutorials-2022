const template = document.createElement("template");
template.innerHTML = `
<style>
    h3{ color:green}
</style>
<h3>
    <slot></slot>
</h3>
`;
// as inner html is components is basically a "slot", we can insert the above  as opposed to the
// "Most basic" example below...  slot is basically a place holder for your conent

class ToDoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    // encapsulated dom for our component elements
    // so that our other styles are seperate from our custom component styles
    // we leave "mode: open" as we will likely want to make modications later on
    //this.shadowRoot(); // will be null if "mode: closed"

    shadow.append(template.content.cloneNode(true)); //makes sure it clones everything in element
  }
}

customElements.define("todo-item", ToDoItem);

// =============================================================================================
// Most Basic

/*

class ToDoItem extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h3>${this.innerText}</h3>`;
  }
}

customElements.define("todo-item", ToDoItem);

*/
