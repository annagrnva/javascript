// let obj = new Map();
// obj.set("name", "Anna");
// obj.set(1, true);
// obj.get("name");
// obj.has("name");
// obj.delete()

// // console.log(obj.set())
// // console.log(obj.get('name'))
// // console.log(obj.has("name"))
// // console.log(obj.delete( 1))
// // console.log(obj)
// // console.log(obj.get('name'))
// // console.log(obj.get(1))
// // console.log(obj.delete('name'))
// // console.log(obj.clear())
// // console.log(obj.size)

// let dolls = new Map([
//     ['red', 500],
//     ['blue', 200],
//     ['green', 300]
// ])
// for (let color of dolls.keys()) {
//     console.log(color)
// }
// for (let value of dolls.values()) {
//     console.log(value)
// }
// for (let amount of dolls.entries()) {
//     console.log(amount)
// }

// dolls.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`)
// })





// let {var1, var2} = {var1:.., var2:...}

// let options = {
//     title: "menu",
//     width: 100,
//     height: 200,
// };

// let {title, width, height} = options;

// console.log(width)

// let {title, width, height} = {title: "menu", width:100, height:100}
// console.log(title)

// let arr = ['anna', 'gur'];

// let [name1, surname] = ['anna', 'gur'];

// console.log(name1)

// let options = {
//     title: "Menu"
//   };
  
//   let {width = "width?", title = "title?"} = options;
  
//   console.log(title);  // Menu
//   console.log(width);  // (результат prompt)
  

// let now = new Date();
// console.log(now)


// function diffSubtract(date1 = 1, date2 = 5) {
//     return date2-date1;
// }

// console.log(diffSubtract())

// function diffGetTime(date1 = 1, date2 = 4) {
//     return date2.getTime() -date1.getTime()
// }
// console.log(diffGetTime())

let student = {
name: 'anna',
age: 18,
city: 'uln'
}

let json = JSON.stringify(student)
console.log(student)
console.log(json)