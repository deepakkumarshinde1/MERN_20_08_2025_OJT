// common functions
function funName(a, b, c = 0) {
  console.log(a + b + c);
} // function definition

let text = 1;
funName(10, 20); // function call
checkValue(null);
function checkValue(a) {
  try {
    if (a === undefined) {
      throw new Error("Please Enter a Number");
    }
    if (a === null) {
      throw new Error("Null is not allow");
    }
    if (a % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  } catch (error) {
    alert(error);
  }
}
