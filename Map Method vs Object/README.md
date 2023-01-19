# Map

- The **Map** object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

## Objects VS. Maps

### Accidental Keys

**Map:** does not contain any keys by default. It only contains what is explicitly put into it.
**Object:** contains default keys that could collide with your own keys if you're not careful.

### Security

**Map:** safe to use with user-provided keys and values.
**Object:** Setting user-provided key-value pairs on an Object may allow an attacker to override the object's prototype, which can lead to object injection attacks

### Key Types

**Map:** keys can be any value, including functions, objects, or any primitive (string, number, boolean, bigint, undefined, symbol, null).
**Object:** complex and best not relied on (thorough answer, I know!)

### Size

**Map:** number of items in a Map is easily retrieved from its size property.
**Object:** number of items in an Object must be determined manually. (ex. Object.keys("YOUR_OBJECT").length)

### Iteration

**Map:** can be directly iterated.
**Object:** objects are not directly iterable using the JavaScript for...of statement (by default). _Must get an iterable by using Object.entries, Object.keys, or for...in statements._

### Performance

**Map:** Performs better in scenarios involving frequent additions and removals of key-value pairs.
**Object:** Not optimized for frequent additions and removals of key-value pairs.

### Serialization and Parsing

**Map:** No native support for serialization or parsing. _(But you can build your own serialization and parsing support for Map by using JSON.stringify() with its replacer argument, and by using JSON.parse() with its reviver argument.)_
**Object:** Native support for serialization from Object to JSON, using JSON.stringify() and JSON.parse().

## Map Methods

**clear()**

- Removes all key-value pairs from the Map object.

**delete()**

- Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. map.has(key) will return false afterwards.

**get()**

- Returns the value associated to the passed key, or undefined if there is none.

**has()**

- Returns a boolean indicating whether a value has been associated with the passed key in the Map object or not.

**set()**

- Sets the value for the passed key in the Map object. Returns the Map object.

**[@@iterator]()**

- Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

**keys()**

- Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.

**values()**

- Returns a new Iterator object that contains the values for each element in the Map object in insertion order.

**entries()**

- Returns a new Iterator object that contains a two-member array of [key, value] for each element in the Map object in insertion order.

**forEach()**

- Calls callbackFn once for each key-value pair present in the Map object, in insertion order.
