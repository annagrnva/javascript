const box = document.querySelector(".box");
//вывод рандомных цветов по клику
// box.addEventListener("click", () => {
//   setInterval(() => {
//   box.style.backgroundColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6, '0');
// }, 2000);
// });


//вывод двух цветов с условием
// const blue = "blue";
// const green = "green";

// function animateBox() {
//   const changeBox = box.style.backgroundColor;

//   if (changeBox === green) {
//     box.style.backgroundColor = blue;
//   } else {
//     box.style.backgroundColor = green
//   }
// }

// setInterval(animateBox, 1000)


// вывод массива элементов по порядку (по счетчику)
let colors = ['red', 'green', 'blue', 'yellow'];
let count = 0;

box.addEventListener("click", animateBox) 
  function animateBox() {
  if (count === colors.length ) {
    count = 0;
  } else {
    count ++;
  }
  box.style.background = colors[count];

}
setInterval(animateBox, 1000)
