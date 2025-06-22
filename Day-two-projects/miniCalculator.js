const prompt = require("prompt-sync")();

console.log("\n======= Welcome to Mini Calculator🧮 =====");
let result;

function calculatorProgram(){
   let valueOne = parseFloat(prompt('Enter your first value: '));
   let operator = prompt("Enter an Operator(+, -, *, /): ");
   let secondValue = parseFloat(prompt("Enter your second value: "));

   switch(operator){
    case '+':
        result = valueOne + secondValue;
        console.log(`Result: ${result}`);
        break;
    case '-':
        result = valueOne - secondValue;
        console.log(`Result: ${result}`);
        break;
    case '*':
        result = valueOne * secondValue;
        console.log(`Result: ${result}`);
        break;
    case '/':
        result = valueOne / secondValue;
        console.log(`Result: ${result}`);
        break;
    default:
        console.log(`You have entered an invalid ${operator}`);
        return;

   }
}

calculatorProgram()