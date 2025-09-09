let countdownText = document.querySelector("#countdown-text");
let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let count = 0;
// console.log("hello");
setTimeout(() => {
  //   console.log("hi");
}, 0);
let intervalId = null;
function CountDown() {
  intervalId = setInterval(() => {
    countdownText.innerHTML = `Countdown ${++count}`;
  }, 50);
}
CountDown();

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

startBtn.addEventListener("click", () => {
  if (intervalId === null) {
    CountDown();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countdownText.innerHTML = `Countdown ${count}`;
});
// console.log("deepak");

// time 1s === 1000 ms
// eventLoop => async in nature ( non blocking )
// web api e.g dom ,
// promise , fetch , setTimeout, setInterval

async function getData() {
  let url = `https://jsonplaceholder.typicode.com/users`;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
}

getData();
