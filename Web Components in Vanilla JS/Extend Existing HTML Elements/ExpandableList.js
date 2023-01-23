class ExpandableList extends HTMLUListElement {
  constructor() {
    super();
    this.style.position = "relative";
    this.toggleBtn = document.createElement("button");
    this.toggleBtn.style = `
            position: absolute;
            border: none;
            background: none;
            padding: 0;
            top: 0;
            left: 5px;
            cursor: pointer;
        `;
    this.toggleBtn.innerText = ">";
    this.toggleBtn.addEventListener("click", () => {
      this.dataset.expanded = !this.isExpanded;
    });
    this.appendChild(this.toggleBtn);
  }
  get isExpanded() {
    return this.dataset.expanded !== "false" && this.dataset.expanded !== null;
  }

  static get observedAttributes() {
    return ["data-expanded"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateStyles();
  }

  connectedCallback() {
    this.updateStyles();
  }

  updateStyles() {
    const transform = this.isExpanded ? "rotate(90deg)" : "";
    this.toggleBtn.style.transform = transform;
    [...this.children].forEach((child) => {
      if (child !== this.toggleBtn) {
        child.style.display = this.isExpanded ? "" : "none";
      }
    });
  }
}

customElements.define("expandable-list", ExpandableList, {
  extends: "ul",
});
