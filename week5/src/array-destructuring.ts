// #1 Variable swapping
export const fruits = ['apple', 'banana'];

// Currently, I would get the following returns:
/* console.log(a); // 'apple'
console.log(b); // 'banana' */

// deconstruct here

let [b,a] = fruits;

// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(a); // 'banana';
console.log(b); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here

let [c,d, ...others] = food;

console.log(c); // 'apple' <<--JSL: a and b conflicted with first exercise, so I updated letters
console.log(d); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Contruct a statement
export const welcome = ['hello', 'taylor'];
let [greeting, name] = welcome;

console.log(greeting, ', ', name, '!');

// 'hello, taylor!'
