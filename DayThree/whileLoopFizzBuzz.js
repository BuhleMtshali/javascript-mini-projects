let i = 1;

while(i <= 15){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(`Fizzbuz`)
    } else if(i % 3 === 0){
            console.log(`${i} is Fizz!!!`);
        } else if(i % 5 === 0){
            console.log(`${i} is Buzz!!`);
        } else {
            console.log(i);
        }
    i++;
}