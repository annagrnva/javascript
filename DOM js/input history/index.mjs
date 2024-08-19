const inputText = document.querySelector("#inputText");
const resultForm = document.querySelector("#result-form")
const result = document.querySelector("#result");

resultForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const inputValue = inputText.value;
    console.log(inputValue);
    // result.textContent = inputValue;
    result.insertAdjacentHTML("beforeend", 
        `
        ${inputValue}
        `
    );
    inputText.value = "";

})


