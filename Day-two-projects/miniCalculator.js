const prompt = require("prompt-sync")();

console.log("======= Welcome to Mini Calculator🧮 =====");

function calculatorProgram(){
   let valueOne = parseFloat(prompt('Enter your first value'));
   let operator = prompt("Enter an Operator(+, -, *, /): ");
   let secondValue = parseFloat(prompt("Enter your second value: "));
}

calculatorProgram()