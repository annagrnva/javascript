const inputText = document.querySelector("#inputText");
const container = document.querySelector("#container");
const result = document.querySelector("#result");
const counter = document.querySelector("#counter");
const counterTasks = document.querySelector("#counter-tasks");
const counterTasksNum = document.querySelector("#counter-tasks-num");
const counterDone = document.querySelector("#counter-done");
const counterDoneNum = document.querySelector("#counter-done-num");



// console.log(container)
container.addEventListener("submit", (event) => {
  event.preventDefault()
  const inputValue = inputText.value;
  if(inputValue.length === 0) {
    return inputValue
  };

  const newElement = document.createElement('div');
  newElement.innerHTML = `
<div>
<span>${inputValue}</span>
<button class="newElement-edit-button">Edit</button>
<button class="newElement-delete-button">Delete</button>

</div>
`
result.appendChild(newElement);
  // console.log(newElement)

  counterTasksNum.textContent = ++ counterTasksNum.textContent;
  // counterDoneNum.textContent = ++ counterDoneNum.textContent;


  inputText.value = "";
})

