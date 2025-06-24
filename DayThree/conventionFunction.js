const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Enter the temperature (in celsius): "));

function convertTemp(celsius){
    if(!isNaN(celsius)){
        let fahrenheit = (celsius * 9/5) + 32;
        return console.log(`The temperature ${celsius}ºC is ${fahrenheit.toFixed(2)}ºF`);
    } else {
        console.log(`${celsius} is an invalid number`)
    }
    
}

let checkAgain = "yes";

while(checkAgain.toLowerCase() === "yes" || checkAgain.toLowerCase() === "y"){
    convertTemp(celsius);
    checkAgain = prompt("Do you want perform another temperature calculation? (yes/no): ");
   
}

console.log("Thank you for trying my mini project!")