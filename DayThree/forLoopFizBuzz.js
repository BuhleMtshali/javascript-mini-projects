function fizzBuzz(){
    for(let i = 0; i <= 15; i++){
        if(i % 3){
            console.log(`${i} is Fizz!!!`);
        } else if(i % 5){
            console.log(`${i} is Buzz!!`)
        } else if(i % 3 && i % 5){
            console.log(`${i} is FizzBuzz!!`)
        } else {
            console.log(i)
        }
    }
}