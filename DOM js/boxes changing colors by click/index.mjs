// const boxes = document.querySelector(".boxes");

// boxes.addEventListener("click", function (event) {
//     //  console.log(event.target)
//     if(event.target.classList.contains("black")) {
//       event.target.classList.remove("black")
//           } else {
//             event.target.classList.add("black")
//           }

//   })


// смена цвета кликом
// boxes.addEventListener("click", function (event) {
//   //  console.log(event.target)
//   if(event.target.classList.contains("black")) {
//     event.target.classList.remove("black")
//         } else {
//           event.target.classList.add("black")
//         }

// })

// смена цветов кликом по порядку
// boxes.addEventListener("click", function (event) {
//   //  console.log(event.target)
//   if (event.target.style.backgroundColor === "") {
//     event.target.style.backgroundColor = "blue"
//   } else if (event.target.style.backgroundColor === "blue") {
//     event.target.style.backgroundColor = "red"
//   } else if (event.target.style.backgroundColor === "red") {
//     event.target.style.backgroundColor = "green"
//   } else if (event.target.style.backgroundColor === "green") {
//     event.target.style.backgroundColor = "yellow"
//   } else {
//     event.target.style.backgroundColor = ""
//   }
// })


const boxes = document.querySelector(".boxes");
const colors = ['red', 'black', 'green', 'yellow', 'blue'];


boxes.addEventListener("click", function (event) {
  const element = event.target;

  if (!element.classList.contains('box')) {
    return
  }

  let currentIndex = -1;

  colors.forEach((item, idx) => {
    if (element.classList.contains(item)) {
      currentIndex = idx;
    }
  })

  event.target.classList.remove(colors[currentIndex])

  if (colors.length - 1 === currentIndex) {
    currentIndex = -1;
  }

  event.target.classList.add(colors[currentIndex + 1])
})