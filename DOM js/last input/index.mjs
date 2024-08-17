const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const result = document.querySelector("#result");
const myButton = document.querySelector("#button");

let lastInput = null;

input1.addEventListener("input", () => {
    lastInput = 1
});

input2.addEventListener("input", () => {
    lastInput = 2
});

myButton.addEventListener("click", () => {

})