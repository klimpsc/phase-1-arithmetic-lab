// Write your code here
let num1 = (31)
let num2 = (2)
let num3 = (20)
let num4 = (5)

let numbers = [15, 6, 10, 20]

let multiply = (num1 * num2)

let mod = (num3 / num4)

let sortedNumbers = numbers.sort(function(a, b){
    return a-b;
})

let max = sortedNumbers[sortedNumbers.length-1];
console.log(max)

let random = Math.floor(Math.random() * 10);





console.log(mod)
console.log(multiply)
console.log(max)