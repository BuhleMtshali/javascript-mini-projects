const prompt = require("prompt-sync")();


//defining variables
let balance = 1000;
let choice;

console.log("====== 🏧Welcome to JS Bank🏦 =======\n");
let name = prompt("Enter your name: ")

function transaction(){
    do{
        console.log("Please choose an option: ");
        console.log("1. Check Balance");
        console.log("2. Deposit");
        console.log("3. Withdrawal");
        console.log("4. Exit");

        choice = prompt("Choose an option to continue with your transaction: ");

    } while(choice !== 4);
}