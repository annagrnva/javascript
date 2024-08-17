const number1Input = document.querySelector("#number1-input");
const number2Input = document.querySelector("#number2-input");
const resultInput = document.querySelector("#result-input");
const calculatorForm = document.querySelector("#calculator-form");
const error = document.querySelector("#error");
let isError = false;

calculatorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const number1Value = number1Input.value;
    const number2Value = number2Input.value;

    if (number1Value === "") {
        error.innerText = "Поле пустое-заполните";
        isError = true;
        return number1Value || number2Value;
    };
    if (number2Value === "") {
        error.innerText = "Поле пустое-заполните";
        isError = true;
        return number1Value || number2Value;
    };

    const radioInput = document.querySelector("input[name='sign']:checked");
    if (radioInput.value === "+") {
        resultInput.value = +number1Input.value + +number2Input.value;
    } else if (radioInput.value === "*") {
        resultInput.value = +number1Input.value * +number2Input.value;
    } else if (radioInput.value === "/") {
        resultInput.value = +number1Input.value / +number2Input.value;
    }

    number1Input.value = "";
    number2Input.value = "";

});

number1Input.addEventListener("input", () => {
    if (isError) {
        isError = false;
        error.innerText = "";
    };
});

number2Input.addEventListener("input", () => {
    if (isError) {
        isError = false;
        error.innerText = "";
    };
});