# HTMLElement.dataset

- The **dataset** read-only property of the HTMLElement interface provides read/write access to custom data attributes (data-\*) on elements.

### In HTML

- The attribute name begins with data-. It can contain only letters, numbers, dashes (-), periods (.), colons (:), and underscores (\_). Any ASCII capital letters (A to Z) are converted to lowercase.

### In JavaScript

- The property name of a custom data attribute is the same as the HTML attribute without the data- prefix, and removes single dashes (-) for when to capitalize the property's "camelCased" name.

# Example:

### HTML

```
<div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth>
  Carina Anand
</div>
```

### JavaScript

```
const el = document.querySelector('#user');

// el.id === 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'carinaanand'
// el.dataset.dateOfBirth === ''

// set a data attribute
el.dataset.dateOfBirth = '1960-10-03';
// Result on JS: el.dataset.dateOfBirth === '1960-10-03'
// Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-date-of-birth="1960-10-03">Carina Anand</div>

delete el.dataset.dateOfBirth;
// Result on JS: el.dataset.dateOfBirth === undefined
// Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand">Carina Anand</div>

if (!('someDataAttr' in el.dataset)) {
  el.dataset.someDataAttr = 'mydata';
  // Result on JS: 'someDataAttr' in el.dataset === true
  // Result on HTML: <div id="user" data-id="1234567890" data-user="carinaanand" data-some-data-attr="mydata">Carina Anand</div>
}
```
