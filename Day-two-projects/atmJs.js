const prompt = require("prompt-sync")();


//defining variables
let balance = 1000;
let choice;

console.log("====== 🏧Welcome to JS Bank🏦 =======\n");

let name = prompt("Enter your name💁🏼‍♀️: ");


if(!name){
    
    console.log("Please enter your name before we can proceed!!")
} else {

    //welcome message
    console.log(`====== Welcome to JS Bank ${name}, lets create your account🫆 =====\n`);
}
    


