const prompt = require("prompt-sync")();

function convertTemp(celsius){
    if(!isNaN(celsius)){
        let fahrenheit = (celsius * 9/5) + 32;
        return console.log(`🌡️ ${celsius}ºC is equal to ${fahrenheit.toFixed(2)}ºF`);
    } else {
        console.log(`🚫 "${celsius}" is not a valid number.`);
    }
    
}

let checkAgain = "yes";

while(checkAgain.toLowerCase() === "yes" || checkAgain.toLowerCase() === "y"){
    let celsius = parseFloat(prompt("Enter the temperature (in celsius): ").trim());
    convertTemp(celsius);
    checkAgain = prompt("Do you want perform another temperature calculation? (yes/no): ").trim();
}

console.log("👋🏽 Thanks for using the Mini Temperature Converter!")