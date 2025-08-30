// if .. else
let isLogin = true;
if (isLogin === true) {
}

if (isLogin === false) {
  // true statement
} else {
  // false statement
}

if (isLogin === true) {
} else if (isLogin === false) {
} else {
}

// switch
let type = "Gold"; // Guest , Standard, Silver , Gold
switch (type) {
  case "Standard":
    console.log("You will get adds after every 5 min");
    break;
  case "Silver":
    console.log("You will get adds after every 30 min");
    break;
  case "Gold":
    console.log("You are add free");
    break;
  default:
    console.log("You are guest user and will get add after each 1 min.");
    break;
}
