// common function
fun();
function fun() {
  console.log("Hello");
}

// function expression
// let sum = function (a, b) {
//   return a + b;
// };

// function expression with arrow function
let sum = (a, b) => a + b;
let result = sum(10, 20);
console.log(result);

// callback function
function a(a1, callback) {
  console.log("i am function a ", a1);
  a1 = a1 + 2; // 12
  callback(a1);
}
// callback function is a function passed in other function call
a(10, function (result) {
  console.log("i am function b ", result);
});

console.clear();

function sub(a = 0, b, callback) {
  let result = a - b;
  callback(result);
} // function definition

// callback
sub(10, 5, function (result) {
  console.log(result * 3.14);
}); // function call

// callback with arrow
sub(10, 5, (result) => {
  console.log(result / 2);
});

// IIFE

(function (a, b) {
  console.log(a + b);
})(10, 20);

// IIFE with arrow function
((a) => {})(10);
