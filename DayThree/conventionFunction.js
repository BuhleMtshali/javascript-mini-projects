let celsius = parseFloat(prompt("Enter the tempereture (in celsius): "));

function convertTemp(celsius){
    return (celsius * 9/4) + 32; 
}

convertTemp(celsius)