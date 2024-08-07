const counter = document.querySelector(".counter")
counter.addEventListener('click', () => {

})

const buttonPlus = document.querySelector(".button-plus");

buttonPlus.addEventListener('click', () => {

  counter.textContent = ++ counter.textContent
});


const buttonMinus = document.querySelector(".button-minus");

buttonMinus.addEventListener('click', () => {

  counter.textContent = -- counter.textContent
});

























// //Кпопка точных отрицательных значений 
// const buttonMinus = document.querySelector(".button-minus");

// buttonMinus.addEventListener('click', () => {
//   if (title.classList.contains('text30')) {
//     title.classList.remove('text30')
//   }
//   title.classList.add('text10')

// });

