// BOM => browser object model
// DOM => document object model
let text = document.querySelector("#my-text"); // single
let changeTextButton = document.querySelector("#change-text");
let input = document.querySelector("#input");
let inputColor = document.querySelector("#color");
let listElement = document.querySelector("#list");
let studentList = [];

changeTextButton.addEventListener("click", () => {
  let newStudent = {
    name: input.value,
    color: inputColor.value,
  };
  studentList.push(newStudent);
  input.value = "";
  printStudent();
  //   changeTextButton.disabled = true;
  //   changeTextButton.innerHTML = "Changed";
});

function printStudent() {
  let _li = studentList.map((value, index) => {
    return `<li style="color: ${value.color}">${value.name}</li>`;
  });
  _li = _li.join("");
  listElement.innerHTML = _li;
}

//  event => mouse , keyboard
