const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Enter the tempereture (in celsius): "));

function convertTemp(celsius){
    return console.log((celsius * 9/4) + 32); 
}

convertTemp(celsius)