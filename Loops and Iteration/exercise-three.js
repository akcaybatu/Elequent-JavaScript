// // FizzBuzz Exercise
for (let num = 0; num <= 100; num += 1){
    if (num % 3 == 0 && num % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(num % 3 == 0){
        console.log("Fizz");
    }
    else if (num % 5 == 0 && num % 3 != 0){
        console.log("Buzz")
    }
    else{
        console.log(num);
    }
}