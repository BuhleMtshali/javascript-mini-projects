const prompt = require("prompt-sync")();

let userName = prompt("Enter your name: ");
let userAge = prompt("Enter your current age: ");


console.log("==== Welcome to Club Athena🏢 ====");
if (userAge >= 18){
    console.log(`Welcome ${userName}, you're currently ${userAge} years old which means you can enter the club!!`);
} else {
    console.log(`Well this is a bummer ${userName}, its seems you're ${userAge} years old which means you're below the minimum age of 18!!`)
}