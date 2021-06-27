range = (start, end, step) => {
    let myArray = [];
    if(step == undefined)
        for (let index = start; index <= end; index++) {
            myArray.push(index);        
        }
    else if (start > end)
        for (let index = start; index >= end; index += step) {
            myArray.push(index);        
        }
    else    
        for (let index = start; index <= end; index += step) {
            myArray.push(index);        
        }
    return myArray;
}
console.log(range(100, 10, -3));

sum = (sumOfNums) => {
    let mySum = 0;
    for (let i = 0; i < sumOfNums.length; i++) {
        mySum += sumOfNums[i];       
    }
    return mySum;
}
console.log(sum(range(100, 10, -3)));

