const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Enter the tempereture (in celsius): "));

function convertTemp(celsius){
    if(!isNaN(celsius)){
        let ferenheit = (celsius * 9/5) + 32;
        return console.log(`The tempreture ${celsius}ºC is ${ferenheit.toFixed(2)}ºF`);
    } else {
        console.log(`${celsius} is an invalid number`)
    }
    
}

let checkAgain = "yes";

while(checkAgain.toLowerCase() === "yes" || checkAgain.toLowerCase() === "y"){
    convertTemp();
    
    checkAgain = prompt("Do you want perform another tempereture calculation? (yes/no): ");
}

console.log("Thank you for trying my mini project!")