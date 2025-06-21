//array for registerd users
const registeredUsers = [];

//welcome message
console.log("===== Welcome to CoddyTech👾 ====");

//username for the user
let user = prompt("Enter your name: ");

//check if person exists before they are added
if(registeredUsers.includes(user)){
    console.log(`Welcome back, ${user}! You're already registered!`)
} else {
    registeredUsers.push(user);
    console.log(`Welcome to CoddyTech ${user}!! you have been successfuly registered!!`)
}

