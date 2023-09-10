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

//PUSH --> menambah data
cars.push("Kijang", "BMW", "Pajero")
console.log(cars)

//Concat -->menggabungkan data
const group = motorCycle.concat(cars)
console.table(group)

//LOOP - pengulangan 
for(i = 0; i < cars.length; i += 1){
    document.writeln(cars[i] + '<br>')
    console.log(cars[i] + '<br>')
}

var i = 0
while(i < cars.length){
    document.writeln(`Loop: ${cars[i] + '<br>'}`)
    i++
}

const food = [
    {
        data : 1,
        rasa : "Manis",
        warna : "Hijau",
        bentuk : "Bulat"
    },
    {
        data : 2,
        rasa : "Pahit",
        warna : "Hitam",
        bentuk : "Oval"
    },
    {
        data : 3,
        rasa : "Asam",
        warna : "Merah",
        bentuk : "Kotak"
    },
]
// let a = ""
// for (let a in food) {
//     a += food[a] + ""
//     document.writeln(`Loop : ${a} </br>`)
// }

food.forEach(foods => {
    for(let value in foods){
        document.writeln(`${foods[value]} </br>`)
    }
})

//Conditional
const score = 75
if(score < 60){
    document.writeln("TIDAK LULUS" + "<br>")
}else if(score >= 60 && score <= 70){
    document.writeln("CUKUP" + "<br>") 
}else{
    document.writeln("LULUS" + "<br>")
}

const hasilUjian = score < 60 ? 'TIDAK LULUS' : score >= 60 && score <= 70 ? 'CUKUP' : 'LULUS'
    document.writeln(hasilUjian + "<br>")

const role = "Programer"
switch(role){
    case "Programer":
        document.writeln("Coding" + "<br>")
        break
    case "UI/UX":
        document.writeln("Mendesign")
        break
    case "Product Manager":
        document.writeln("Lead")
        break
    default:
        document.writeln("Kerja")
    }
    
//FUNCTION
//Decalation
function user(nama, email) {
    document.writeln(`Nama : ${nama}, Email : ${email}` + "<br>")
}
user('Ade Setiawan ', 'brazz73@gmail.com') 

//Expression
const user2 = function(nama, email){
    const result3 = `Nama : ${nama}, Email : ${email}`
    return result3
}
const ade = user2("AdeS", "brazz73@gmail.com")
document.writeln(ade)

const user3 = (nama, email) => {
    const result4 = `Nama : ${nama}, Email : ${email}`
    return result4
}
document.writeln(user3("Ade", "brazz73@gmail.com"))

//BMI CALC
const bmiMan = () => {
    const berat = parseFloat(document.getElementById("berat").value)
    const tinggi = parseFloat(document.getElementById("tinggi").value)

    const bmiManCount = berat/(tinggi*tinggi)
    let indicator
  
    console.log(bmiManCount)

    document.getElementById("resultBMI"), innerHTML = `${indicator}`

    if(bmiManCount < 17){
        indicator = "Sangat Kurus"
    }else if(bmiManCount >= 17 && bmiManCount <= 18.5){
        indicator = "Kurus"
    }else if(bmiManCount >= 18.5 && bmiManCount <= 25){
        indicator = "Normal"
    }else if(bmiManCount >= 25 && bmiManCount <=27){
        indicator = "Gemuk"
    }else{
        indicator = "Over Weight"
    }
    return indicator
}

//document.writeln(bmiMan(75, 1.7))