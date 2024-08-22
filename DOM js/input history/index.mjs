const inputText = document.querySelector("#inputText");
const resultForm = document.querySelector("#result-form")
const result = document.querySelector("#result");

resultForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = inputText.value;
    console.log(inputValue);
    result.insertAdjacentHTML("beforeend",
        `
     <div>${inputValue}</div>
        `
    );
    inputText.value = "";

});

const deleteBtn = document.createElement("button");
deleteBtn.textContent = 'delete';

deleteBtn.addEventListener('click', () => {
    const resultDelete = document.querySelector("#result");
    resultDelete.remove()

})
document.body.append(deleteBtn)
// console.log(deleteBtn)


