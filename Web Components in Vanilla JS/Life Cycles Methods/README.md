# Other LifeCycle Hooks

### connectedCallback()

- fires when a component is inserted into the DOM.

### disconnectedCallback()

- lifecycle hook fires when a component is removed from the DOM.
- Use **_disconnectedCallback()_** to clean up work done in the **_connectedCallback()_**, like purging caches or removing event listeners.

**NOTE:** To access elements in a component’s template, use _this.template_.
