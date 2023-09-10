// document.writeln("Hello World")

//Ini komen satu baris
console.log("Hello World")

/*
Ini komen multiline
ini baris kedua
*/
console.log("Hai....")

//Tipe data number
console.log(2 + 2)
console.log(2.3)

//Tipe data boolean
console.log(true)
console.log(false)

//Variable
var fullname = "Ade Settiawan"
var fullname = "Jhon Thor"

// const fullname_satu = "Jhon Thor 2"
// console.log(fullname_satu)
// fullname_satu = "Jhon Thor 3"

let fullname_tiga ="Richard Mark"
console.log(fullname_tiga)
fullname_tiga = "Richard Mark 3"
console.log(fullname_tiga)

//Operator Artimatika
let result = 3 + 5 
console.log(result) //8

let resultPengurangan = 10 - 8 
console.log(resultPengurangan) //2

let resultPerkalian = 10 * 2 
console.log(resultPerkalian) //20

let resultBagi = 10/2  
console.log(resultBagi) //5

let resultSisa = 10 % 3 
console.log(resultSisa) //1

// const number1 = prompt("Number 1")
// const number2 = prompt("Number 2")
// const result2 = number1/number2
// alert("Hasil bagi : " + result2) 

//Operator perbandingan
let hasil = 5 == 5 //true
console.log(hasil)

let hasil2 = 5 > 3 //true
console.log(hasil2)

let hasil3 = 5 < 3 //false
console.log(hasil3)

let hasil4 = 5 === "5" //false
console.log(hasil4)

//Operator Logika
const nilaiUjian = 70
const nilaiAbsen = 80

const lulusUjian = nilaiUjian > 75
const lulusAbsen = nilaiAbsen > 75

const lulus = lulusUjian && lulusAbsen
console.log("Hasil Ujian : ", lulus)

const lulus2 = lulusUjian || lulusAbsen
console.log("Hasil Ujian : ", lulus2)

//STRING TEMPLATE
const nama = "Ade Setiawan"
const value = 80
console.log("Nama : " + nama + ", Value : " + value)
console.log(`Nama : ${nama},Value : ${value}`)

//ARRAY
const cars = [
    "Ayla",
    "Agya",
    "Calya",
    "Avanza"
]

const motorCycle = [
    "Vario",
    "Beat",
    "Scoopy",
    "Nmax",

]


console.log("Data:", cars)
console.log("Data Pertama = ", cars[0])
console.table(cars)
console.log(cars.length)

//nambah data
cars.push("Kijang", "BMW", "Pajero")
console.log(cars)

//concat
const group = motorCycle.concat(cars)
console.table(group)
