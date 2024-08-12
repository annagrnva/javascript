const number1Input = document.querySelector("#number1-input");
const number2Input = document.querySelector("#number2-input");
const resultInput = document.querySelector("#result-input");
const calculatorForm = document.querySelector("#calculator-form");

calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number1Value = number1Input.value;
    const number2Value = number2Input.value;


    const error = document.querySelector("#error");
    if (number1Value === "") {
        error.innerText = "Поле пустое-запоните"
        return number1Value || number2Value;
    };
    if (number2Value === "") {
        error.innerText = "Поле пустое-запоните"
        return number1Value || number2Value;
        
    };
    resultInput.value = +number1Input.value + +number2Input.value;

    number1Input.value = "";
    number2Input.value = "";
});


// const radioInput = document.querySelector("input[name='sign']:checked");
// const radioInputValue = radioInput.value;


