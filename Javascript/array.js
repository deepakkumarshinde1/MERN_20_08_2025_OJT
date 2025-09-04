// what is an array
// Collection of data
// array have index & value
// array is stored as reference data type
//.          0 ,1. 2. 3  4   5
const array = Object.freeze([1, "a", null, true, function () {}, {}, []]);

// Object
// index are user defined
let student = {
  name: "Deepak",
  rollNumber: 35,
  age: true,
  marks: function () {},
  list: [{}, {}],
  data: {
    one: "1",
    two: 2,
  },
};

console.log(student);

// list of student
// [{},{},{},{}]
// Array and Methods

// Store => push , unshift
let numbers = [10, 20];
//numbers.push(100, 200);
// numbers.unshift(100, 200);
numbers.splice(1, 0, 100, 200, 30, 200); // (index, deleteCount, addNumber)
console.log(numbers);

// Print => forEach
numbers.forEach((value, index) => {
  console.log(value, index);
});

// Edit => splice
//numbers.splice(3, 1, "Deepak"); // index , delete count, value
console.log(numbers);
console.clear();
console.log(numbers);

// Delete => pop , shift , splice
// numbers.pop();
// numbers.shift();
// numbers.shift();
// numbers.splice(2, 1);
// console.log(numbers);

// Searching => find , filter

//20
//   => only one index
//       => findIndex
//          => index
//       => not found
//          => -1

//   => only one record
//       => find
//          => one record
//       => not found
//          => undefined

//20 =>
//     one or more then one record
//        => filter
//             => [filter_array]
//        => not found
//             => []
let search = 400;
let result = numbers.findIndex((value, index) => {
  return value === search;
});
console.log(result);
console.clear();
// Merging => spread operator => ... to right side of =
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 20, 30, 400, 5];
let array3 = [12, 222, ...array1, ...array2, 1234];
console.log(array3);

// Sort => sort
let sortArray = array3.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

console.log(sortArray);
// Convert Array to String => Join
// date
let date = new Date().toISOString();
console.log(date);
date = date.split("T")[0]; // array => string
console.log(date);
date = date.split("-"); // array
console.log(date);
date = date.reverse(); // array
console.log(date);
date = date.join("/"); // string
console.log(date);

// Recreate => Map
const indianNames = [
  "Aarav Sharma",
  "Isha Patil",
  "Rohan Deshmukh",
  "Sneha Nair",
  "Aditya Verma",
  "Kavya Iyer",
  "Rahul Choudhary",
  "Priya Kulkarni",
  "Arjun Reddy",
  "Meera Singh",
];
console.clear();
let list = indianNames
  .map((value, index) => {
    return `<li>${value}</li>`;
  })
  .join("");

console.log(list);
let ulElement = document.querySelector("ul");
ulElement.innerHTML = list;
// Reduce => Reduce

// methods needs callback
// forEach , find, Filter, sort, map, reduce, fill, same, every

// methods dont need callback
// push, pop, shift, unshift,splice

// (...abc) => rest parameter
// [...array]  => spread operator (right of =)
// [...data] => rest operator (left of =)
