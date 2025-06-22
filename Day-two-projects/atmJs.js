const prompt = require("prompt-sync")();


//defining variables
let balance = 1000;
let choice;

console.log("====== 🏧Welcome to JS Bank🏦 =======\n");



while(true){

    let name = prompt("Enter your name💁🏼‍♀️: ");
    console.log(`Welcome to JS Bank🏦 ${name}, lets create an account: `);

    do{
       let accountNumber = prompt(`Enter your 5-digit Account Number ${name}🔢: `);
       if(accountNumber.length !== 5){
            console.log(`You account number has to be 5 digits!`);
       }

    } while(accountNumber.length() !== 5);

    let pin = prompt(`Create your pin ${name}: `);

    do{
        let confirmPin = prompt(`Please confirm your pin: `);

        if(pin !== confirmPin){
            console.log("Pins do not match, try again")
        }
    } while(pin !== confirmPin);


}

    


