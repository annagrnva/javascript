const title = document.querySelector(".title");

// //Кпопка отрицательных значений
// const buttonMinus = document.querySelector(".button-minus");

// const myFunc1 = () => {

//     const currentFontSize = parseFloat(
//         window.getComputedStyle(title, null).getPropertyValue("font-size"),
//     );

//     if(currentFontSize >= 5) {
//         title.style.fontSize = `${currentFontSize -1}px`;
//         console.log(currentFontSize);
//     };
// };

// buttonMinus.addEventListener("click", myFunc1);


// //Кпопка положительных значений
// const buttonPlus = document.querySelector(".button-plus");

// const myFunc2 = () => {

//     const currentFontSize = parseFloat(
//         window.getComputedStyle(title, null).getPropertyValue("font-size"),
//     );

//     if(currentFontSize <= 25) {
//         title.style.fontSize = `${currentFontSize +1}px`;
//         console.log(currentFontSize);
//     };
// };

// buttonPlus.addEventListener("click", myFunc2);



//Кпопка точных отрицательных значений 
const buttonMinus = document.querySelector(".button-minus");

buttonMinus.addEventListener('click', () => {
  if (title.classList.contains('text30')) {
    title.classList.remove('text30')
  }
  title.classList.add('text10')

});


//Кпопка точных положительных значений 
const buttonPlus = document.querySelector(".button-plus");

buttonPlus.addEventListener('click', () => {
  if (title.classList.contains('text10')) {
    title.classList.remove('text10')
  }
  title.classList.add('text30')

});



