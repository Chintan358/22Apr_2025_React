const mySet = new Set();

mySet.add(1); // Add a number
mySet.add('hello'); // Add a string
mySet.add(1); // This will be ignored as 1 already exists
mySet.add("20")
mySet.add("Hello")

// console.log(mySet.size); // Output: 2
// console.log(mySet.has('hello')); // Output: true
// mySet.delete(1); // Remove an element
// console.log(mySet.size); // Output: 1

console.log(mySet);
