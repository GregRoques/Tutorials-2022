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
  }
}

customElements.define("todo-item", ToDoItem);
