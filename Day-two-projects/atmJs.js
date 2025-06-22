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

        choice = parseFloat(prompt("Choose an option to continue with your transaction: "));

        switch(choice){
            case 1:
                console.log(`${name}, Your current Balance is: ${balance}`);
                break;
            case 2:
                let deposit = parseFloat(prompt(`Enter the amount you want to deposit: `));
                if(deposit > 0){
                    balance += deposit;
                    console.log(`${name}, you have successfuly deposit R${deposit} and your balance is R${balance}`);
                } else {
                    console.log(`Invalid amount`)
                }
                break;
            case 3:
                let Withdrawal = parseFloat(prompt(`Enter the amount you want to withdraw: `));
                if(Withdrawal > 0 && Withdrawal <= balance){
                    balance -= Withdrawal;
                    console.log(`${name} You have successfuly withdrew  R${Withdrawal} from your account and your balance is R${balance}`)
                } else {
                    console.log('invalid amount')
                }
                break;
            case 4:
                console.log(`Thank you for choosing JS Bank ${name}`);
                break;
            default:
                console.log("invalid choice")

        }

    } while(choice !== 4);
}

transaction();