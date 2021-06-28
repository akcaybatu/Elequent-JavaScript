let total = 0, count = 1;
while (count <= 10){
    total += count;
    count += 1;
}
console.log(total);

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return factorial(n - 1) * n;
    }
}
console.log(factorial(8));
/* Mantığı
return --> factorial(4) * 5
       --> factorial(3) * 4
       --> factorial(2) * 3
       --> factorial(1) * 2
       --> factorial(0) * 1
*/

let number = 0;
while (number <= 12){
    console.log(number);
    number = number +2;
}

// let result = 1;
// let counter = 0;
// while (counter < 10){
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);

if (false != true){
    console.log("There you are")
    if (1 < 2)
        console.log("I think you got it")
}


for (let number = 0; number <= 12; number += 2){
    console.log(number);
}


let result = 1;
for (let counter = 0; counter < 10; counter += 1){
    result = result * 2;
}
console.log(result);



for(let current = 20; current += 1;){
    if(current % 7 == 0){
        console.log(current);
        break;
    }
}


switch (prompt("What is the weather like?")){
    case "rainy":
        alert("Umbrella?");
        break;
    case "sunny":
        alert("What a lovely day");
        break;
    case "cloudy":
        alert("Be careful");
        break;
    default:
        alert("Unknown weather");
        break;
}