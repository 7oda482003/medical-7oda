// var m48 = 25, m191 = 3
// console.log(m48 + m191)
// let a = 10
// let b = 20
// console.log(`${a} 
// ${b}`)
// // window.alert("Hi")
// // document.writeln("<h1>Hello Here</h1>");
// // document.writeln("<div><p>Login</p><input><buttom>login</buttom></div>")

// let theTitle = "Elzero", thePragraphe = "Elzero web school", theDate = "25/10"
// document.writeln(`<h1>Hello ${theTitle}</h1>`)
// document.writeln(`<h5>${thePragraphe}</h5>`)
// document.writeln(`<p>${theDate}</p>`)
// document.writeln(`<h1>Hello ${theTitle}</h1>`)
// document.writeln(`<h5>${thePragraphe}</h5>`)
// document.writeln(`<p>${theDate}</p>`)
// document.writeln(`<h1>Hello ${theTitle}</h1>`)
// document.writeln(`<h5>${thePragraphe}</h5>`)
// document.writeln(`<p>${theDate}</p>`)
// document.writeln(`<h1>Hello ${theTitle}</h1>`)
// document.writeln(`<h5>${thePragraphe}</h5>`)
// document.writeln(`<p>${theDate}</p>`)
// document.writeln(`<h2>Hello ${theTitle}</h2> <h5>${thePragraphe}</h5> ${theDate}`.repeat(4))

// document.writeln(`<div style="width:300px;background:#eee;padding:20px;text-align:center;font-family:Arial"><h3>Elzero</h3><p>Elzero Web School</p><span>25/10</span></div><br>`.repeat(5));
// document.writeln(`<div style="width:300px;background:#eee;padding:20px;text-align:center;font-family:Arial"><h3>Elzero</h3><p>Elzero Web School</p><span>25/10</span></div><br>`);
// document.writeln(`<div style="width:300px;background:#eee;padding:20px;text-align:center;font-family:Arial"><h3>Elzero</h3><p>Elzero Web School</p><span>25/10</span></div><br>`);
// document.writeln(`<div style="width:300px;background:#eee;padding:20px;text-align:center;font-family:Arial"><h3>Elzero</h3><p>Elzero Web School</p><span>25/10</span></div><br>`);

// let a = 10
// let b = "20"
// let c = 80

// console.log(++a + +b++ + +c++ + +a++)

// // a = 12
// // b = 21
// // c = 81
// console.log(++a + -b + +c++ - -a++ + +a)

// // a = 14
// // b = 21
// // c = 82
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true)

// // a = 12
// // b = 22
// // c = 81


// let d = "-100"
// let e = "20"
// let f = 30
// let g = true

// console.log(-d * +e) // 2000
// console.log() // 173


// let a = 1_00
// let b = 2_00.5
// let c = 1e2
// let d = 2.4

// console.log(Math.round(Math.min(a, b, c, d)))
// console.log(a ** Math.round(d))
// console.log(Math.round(d))
// console.log(Math.floor(d))
// console.log(Math.trunc(d))
// console.log(parseInt(d))
// console.log(((Math.floor(b) / Math.ceil(d)).toFixed(2)).toString()) // 66.67 string
// console.log(Math.ceil(b) / Math.ceil(d)) // 67 number


// let a = "Elzero web school"
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6))
// console.log(a.charAt(13).toUpperCase().repeat(8))
// console.log(a.split(" ", 1))
// console.log(a.substring(0, 5) , a.substring(11))
// console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase())

// let a = 1
// // a < 10 ? console.log("10") : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("UnKnow")
// console.log(a < 10 ? 10 :a  >= 10 && a <= 40 ? "10 to 40" : a > 40 ? "> 40" : "UnKnow")

// let st = "Elzero Web School"
// if (typeof "st" === typeof "34") {
//     console.log("Good")
// }
// if (st.charAt(st.indexOf("W")) === "W") {
//     console.log("Good")
// }
// if (st !== "string") {
//     console.log("Good")
// }
// if (typeof st === typeof "number") {
//     console.log("Good")
// }
// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//     console.log("Good")
// }


// let zero = 0
// let counter = 3
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

// console.log(result1 = my.reverse().slice(2))
// console.log(result2 = result1.slice(1, 3))
// result2.unshift("Elzero")
// console.log(result2)
// result2.splice(1)
// console.log(result2.slice(2))

// let jop = "Maneger"
// let salery = 0
// switch (salery = 8000) {
// }



// let products = ["KeyBoard", "Mouse", "Pen", "Pad", "Monitor", "Iphone"]
// let colors = ["Red", "Green", "Blue"]
// let ShowCount = 5


//  document.writeln(`<h1>Show ${ShowCount} Produts</h1>`)
//  for (let i =0; i < ShowCount; i++){
//     document.writeln(`<div>`)
//     document.writeln(`<h3>[${i + 1}] ${products[i]}</h3>`)
//     for (let j = 0; j < colors.length; j++) {
//         // document.writeln(`<p>${colors[j]}</p>`)
//         document.writeln(`<p>${colors[j]}</p>`)
//     }
//     document.writeln(`</div>`)
//  }



let myAdmins = ["Mahmoud", "Ahmed", "Hussein", "Zamzam"]
let myEmployee = ["Mohamed", "Ameer", "Hassan", 'Amar', "Ziad", "Haneen", "Zahraa", "Manar", "Ali", "Amira"]


for (let i = 0; i < myAdmins.length; i++) {
  document.writeln(`<hr>`)
  document.writeln(`<h1>The Admin of Team <span style="color:red;">${i + 1}</span> is <span style="color:blue;">${myAdmins[i]}</span></h1>`)
  document.writeln(`<h3>Group Member :- </h3>`)
  let counter = 0
  for (let m = 0; m < myEmployee.length; m++) {
      if (myAdmins[i][0] === myEmployee[m][0]) {
          document.writeln(`<p>${++counter} - ${myEmployee[m]}</p>`)
      }
  }
}

let heightInput = document.getElementById("height")
let weightInput = document.getElementById("weight")
let button = document.getElementById("calc")
let result = document.getElementById("result")

button.onclick = function () {
  let height = heightInput.value;
  let weight = weightInput.value;

  if (height === "" || weight === "") {
    result.textContent = "Please enter height and weight";
    return;
  }

  height = height / 100;

  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);

  let message = "";

  if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi < 25) {
    message = "Normal";
  } else if (bmi < 30) {
    message = "Overweight";
  } else {
    message = "Obese";
  }
    result.innerHTML = `
        <div style="font-size:30px; margin:10px 0;">${bmi}</div>
        <div>${message}</div>
    `;
}
