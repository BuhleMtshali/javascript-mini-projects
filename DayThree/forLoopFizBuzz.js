function fizzBuzz(){
    for(let i = 1; i <= 20; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} is FizzBuzz!!`);
        } else if(i % 3 === 0){
            console.log(`${i} is Fizz!!!`);
        } else if(i % 5 === 0){
            console.log(`${i} is Buzz!!`);
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
