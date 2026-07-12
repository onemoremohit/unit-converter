/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputNum= document.getElementById("input")
const button= document.getElementById("btn")
const meterFeet= document.getElementById("meterFeet")
const literGallon= document.getElementById("literGallon")
const kgPound= document.getElementById("kgPound")

button.addEventListener("click", function(){
    let num= Number(inputNum.value)
    meterFeet.innerHTML= `<p>${num} meters = ${(num* 3.281).toFixed(3)} feet | ${num} feet = ${(20/3.281).toFixed(3)} meters.</p>`
    literGallon.innerHTML= `<p>${num} liters = ${(num*0.264).toFixed(3)} gallons | ${num} gallons = ${(num/0.264).toFixed(3)} liters.</p>`
    kgPound.innerHTML= `<p>${num} kilograms = ${(num*2.204).toFixed(3)} pounds | ${num} pounds = ${(num/2.204).toFixed(3)} kilograms.</p>`
})