const prompt = require("prompt-sync")();

const users = []; // Array to hold user objects

let addMore = "yes";

while (addMore.toLowerCase() === "yes" || addMore.toLowerCase() === "y") {
    const firstName = prompt("Enter your first name: ");
    const lastName = prompt("Enter your last name: ");
    const email = prompt("Enter your email: ");

    const user = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim()
    };

    users.push(user);

    console.log("\n✅ User added successfully!");
    console.log(user);

    addMore = prompt("Do you want to add another user? (yes/no): ");
}

console.log("\n📦 All registered users:");
console.log(users);
