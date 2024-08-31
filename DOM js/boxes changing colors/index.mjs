const box = document.querySelectorAll(".box");

setTimeout(() => {
  box.style.backgroundColor = 'red';
}, 2000);

console.log(box)



// const myFunc = () => {

//   boxes.forEach((box) => {
//     box.classList.add("red");
//   });

// };

// boxes.forEach(function (item) {
//   item.addEventListener("click", myFunc);
// });