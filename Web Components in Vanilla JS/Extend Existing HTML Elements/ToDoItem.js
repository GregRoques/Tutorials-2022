const template = document.createElement("template");
template.innerHTML = `
<style>
    label { 
        color: red;
        display: black;
    }

    .description{
        font-size: .65rem;
        font-weight: lighter;
        color: green;
    }

</style>
<div>
    <label>
        <input type="checkbox"/>
        <slot></slot>
        <span class="description">
            <slot name="description"></slot>
        </span>
    </label>
</div><br>
`;

// notice the "sub-slot" with class of description

class ToDoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input");
  }

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    //console.log(name, oldValue, newValue);
    if (name === "checked") this.updateChecked(newValue);
  }

  connectedCallback() {
    console.log("connected"); // will call 3 times on load, as we have loaded three "todo-item" components
  }

  updateChecked(value) {
    this.checkbox.checked = value != null && value != "false";
  }
}

customElements.define("todo-item", ToDoItem);

// const item = document.querySelector("todo-item");
// let checked = true;
// setInterval(() => {
//   checked = !checked;
//   item.setAttribute("checked", checked);
// }, 500);
