const prompt = require("prompt-sync")();

//cart array
let cart = [];

console.log("====== 🛍️Welcome to MiniJS Cart🛒 ======\n");

//creating a while loop for the program
while(true){
    console.log("Please choose an option below: \n");
    console.log("1. View Cart");
    console.log("2. Add Item");
    console.log("3. Remove Item");
    console.log("4. Exit");

    let choice = prompt("Please select an option: ");

    if(choice === "1"){
        if(cart.length > 0){
            console.log(`\nYour cart: `);
            for (let i = 0; i < cart.length; i++){
                console.log(`${cart[i]}`)
            }
        } else {
            console.log('\nYour cart is currently empty!')
        }
    } else if (choice === "2"){
        let item = prompt("Enter the item you want to add: ");
        if(cart.includes(item)){
            console.log(`${item} already exists in the cart`);
            console.log(`Your cart: ${cart}`)
        } else {
            cart.push(item);
            console.log(`${item} has been successfully added! `)
            console.log(`Your cart: ${cart}`);
        }
       
    } else if(choice === "3"){
        let item = prompt("Enter the item you want to remove: ");
        if(cart.includes(item)){
            cart = cart.filter(items => items.toLowerCase() !== item.toLowerCase());
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