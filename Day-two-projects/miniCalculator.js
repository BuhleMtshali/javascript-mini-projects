const prompt = require("prompt-sync")();

console.log("\n======= Welcome to Mini Calculator🧮 =====");
let result;

function calculatorProgram(){
   let valueOne = parseFloat(prompt('Enter your first value: '));
   let operator = prompt("Enter an Operator(+, -, *, /): ");
   let secondValue = parseFloat(prompt("Enter your second value: "));

    if (isNaN(valueOne) || isNaN(secondValue)) {
    console.log("🚫 Invalid number entered. Please try again.");
    return;
    }

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
        if(secondValue === 0){
            console.log('Error, we cannot divide by 0');
        } else {
            result = valueOne / secondValue;
            console.log(`Result: ${result}`);
        }
        break;
    default:
        console.log(`You have entered an invalid ${operator}`);
        return;

   }
}

let calculateAgain = "yes"; //default to enter loop

while(calculateAgain.toLowerCase() === "yes" || calculateAgain.toLowerCase() === "y"){
    calculatorProgram();

    calculateAgain = prompt("Do you want to make another calculation? (yes/no): ").trim();
}

console.log("Thank you for trying my mini calculator!!")