// hoisting in javascript
//console.log(text); // undefined , null, error
let text = 10;

console.log(text); // undefined , null, error
const pie = 3.14;

// console.log(typeof text);
// console.log(typeof pie);

let text1; // NaN
let text2 = 10;
let result = text1 + text2; // NaN

console.log(isNaN(text1));
