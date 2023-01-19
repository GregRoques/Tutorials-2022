// pretty much just like in Java... for unique values

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // 1,2,3,4,5,5

var uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers); // 1,2,3,4,5

// ================================= Set methods
/*

add()
Inserts a new element with a specified value in to a Set object, if there isn't an element with the same value already in the Set.

clear()
Removes all elements from the Set object.

delete()
Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. has(value) will return false afterwards.

has()
Returns a boolean asserting whether an element is present with the given value in the Set object or not.

[@@iterator]()
Returns a new iterator object that yields the values for each element in the Set object in insertion order.

*/
