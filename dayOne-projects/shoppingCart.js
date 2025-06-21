const prompt = require("prompt-sync")();

//cart array
const cart = [];

console.log("====== 🛍️Welcome to MiniJS Cart🛒 ======");

//creating a while loop for the program
while(true){
    console.log("Please choose an option below: ");
    console.log("1. View Cart");
    console.log("2. Add Item");
    console.log("3. Remove Item");
    console.log("4. Exist");

    let choice = prompt("\nPlease select an option: ");

    if(choice === "1"){
        if(cart){
            for (let i = 0; i < cart.length; i++){
                console.log(`Your cart: ${i}`)
            }
        } else {
            console.log('Your cart is currently empty!')
        }
    } else if (choice === "2"){
        let item = prompt("Enter the item you want to add: ");
        if(cart.includes(item)){
            console.log(`${item} already exists in the cart`)
        } else {
            cart.push(item);
            console.log(`${item} has been successfully added!`)
        }
       
    } else if(choice === "3"){
        let item = prompt("Enter the item you want to remove: ");
        if(cart.includes(item)){
            cart = cart.filter(items => items.toLowerCase() !== item);
            console.log(`${item} has been successfuly removed!!!`)
        } else {
            console.log(`${item} does not exist!`)
        }
    } else if(choice === "4"){
        console.log("Thank you for shopping!!");
        break
    } else {
        console.log(`${choice} does not exist please try another option!!`)
    }

}