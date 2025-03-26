// // conditions

// let age = 2
// if (age >= 18) {
//     console.log("you are allowed to vote")
// } else {
//     console.log("you are too young too vote")
// }


// let name = "jhon"

// if (name === "abebe") {
//     console.log("welcome abebe")
// } else {
//     console.log("you are not abebe")
// }


// let a = 12
// let b = 1

// if (a == b) {
//     console.log("a is equal with b")
// } else if (a > b) {
//     console.log("a is greater than b")
// } else {
//     console.log("a is less than b")
// }

// let grade = 62

// if (grade >= 90) {
//     console.log("A+")
// } else if (grade >= 80) {
//     console.log("A")
// } else if (grade >= 75) {
//     console.log("A_")
// } else if (grade >= 70) {
//     console.log("B+")
// } else if (grade >= 65) {
//     console.log("B")
// } else if (grade >= 60) {
//     console.log("B-")
// } else {
//     console.log("Failed")
// }


// let time = 12

// if (time >= 6 && time < 18) {
//     console.log("it is daytime")
// } else {

//     console.log("its nighttime")
// }


// let number = 6

// if (number % 2 === 0) {
//     console.log("the number is even")

// } else {
//     console.log("the number is odd")
// }


// let food = "small"

// if (food === "big") {
//     conslole.log("pay for three")

// } else if (food === "medium") {
//     console.log("pay for two")
// } else {
//     console.log("pay for one")
// }

// let day = "monday"
// if (day === "monday") {
//     console.log("today is monday")
// } else if (day === "thuesday") {
//     console.log("today is tuesday")
// } else if (day === "wednsday") {
//     console.log("today is wednsday")
// } else if (day === "thursday") {
//     console.log("today is thursday")
// } else if (day === "friday") {
//     console.log("today is friday")
// } else if (day === "saturday") {
//     console.log("today is saturday")
// } else {
//     console.log("today is sunday")
// }



// let lightColor = "green"

// if (lightColor === "green") {
//     console.log("go")
// }
// else if (lightColor === "yellow") {
//     console.log("slow down")
// } else if (lightColor === "red") {
//     console.log("stop")
// }
// else {
//     console.log("invalid color")
// }

// let box_a = "real"
// if (box_a === "real") {
//     console.log("you can use it")
// } else if (box_a === "fake") {
//     console.log("put it in the trash")
// } else {
//     console.log("write on it unknown")
// }


// week two functions

// function hello() {
//     console.log("Hello World")
// }

// hello()

// function getUser(name) { // name : parameter
//     console.log(`your name is: ${name}`)
// }

// getUser("Elias") // elias: argument

// function add(a, b, c) {
//     return a + b + c
// }
// let sum = add(12, 4, 3)
// console.log(`the sum is ${sum}`)

// function calculator(a, b, command) {

//     if (command === "+") {
//         console.log(`the sum of a and b is: ${a + b}`)
//     }

//     else if (command === "-") {
//         console.log(`a minus b is: ${a - b}`)
//     }

//     else if (command === "*") {
//         console.log(`the product of a and b is: ${a * b}`)
//     }

//     else if (command === "/") {
//         console.log(`a over b is : ${a / b}`)
//     }

//     else {
//         console.log("the command is invalid")
//     }
// }

// calculator(5, 3, "=")


// function checkBankBalance(balance) {
//     if (balance >= 50000) {
//         console.log("your balance is: " + balance + " you are a VIP customer")
//         console.log(`your balance is: ${balance} you are a VIP customer`)
//     }
//     else if (balance >= 10000) {
//         console.log("your balance is: " + balance + " you are a valued customer")
//         console.log(`your balnce is: ${balance} you are a valued customer`)
//     } else if (balance >= 0) {
//         console.log("your balance is: " + balance + " you are sufficient customer")
//         console.log(`your balnce is: ${balance} you are a sufficient customer`)
//     } else {
//         console.log("your balance is insufficient, please contact your bank")
//     }
// }



// checkBankBalance(3)

// // F = (°C × 9/5) + 32
// function multiplication(a, b) {
//     return a * b
// }
// result = multiplication(14, 8)

// console.log(result)

// console.log(multiplication(14, 8))


// function CelsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9 / 5) + 32
//     console.log(`so: ${celsius} celsius is : ${fahrenheit} fahrenheit`);
// }

// CelsiusToFahrenheit(20);
// //but may be if we can with return?

// function fahrenheitToCelsius(fahrenheit){
//     let celsius = (fahrenheit - 32) * 5/9;
//     console.log(`${fahrenheit} fahrenheit is ${celsius} celsius`)
// }

// fahrenheitToCelsius(43)

// function fahrenheitToKelvin(fahrenheit){
//     return ((fahrenheit - 32) * 5/9) + 273.15;
// }
// let fahrenheit=150

// console.log(`${fahrenheit} fahrenheit is ${fahrenheitToKelvin(fahrenheit)} kelivin`)





// // variable scope
// //two types of variables: local and global

// let globalVar=12;

// function exampleFunction(){
//     let localVar=13;
//     console.log("I am global "+ globalVar);
//     console.log("I am local "+ localVar)
// }

// exampleFunction()

// console.log("I am global " + globalVar)

// function outer(){
//     let outervar=12;
//     function inner(){
//         console.log(outervar)
//     }
//     inner()
// }

// outer()



// loops

for(let i=0;i<=3;i++){
    console.log(`current value of i is ${i}`)
}

let fruits = ["Apple", "Banana", "Cherry","orange"];

for (let i = 0; i < fruits.length; i++) {
 console.log(`the current value is ${fruits[i]}`)
}

for(let i=1;i<=100;i++){
    if(i%2 ===0){
        console.log(i)
    }
}

for (let i=0;i<12;i++){
    console.log("Hello Elias")
}
