// --- With reverse method ---
// reverseArray = (reverseValue) => {
//     let reversed = reverseValue.reverse();
//     return reversed;
// }
// console.log(reverseArray(["A", "B", "C"]));

// reverseArrayInPlace = (reverseValueIn) => {
//     reverseValueIn = reverseValueIn.reverse();
//     return reverseValueIn;
// }
// let arrayValue = [1, 2, 3, 4];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);

// --- Without reverse method ---
reverseArray = (reverseValue) => {
    let reversed = reverseValue.length - 1;
    let newArray = [];
    for (let i = reversed; i >= 0; i--) {
        newArray.push(reverseValue[i]);
    }
    return newArray;
}
console.log(reverseArray([1, 2, 3]));

reverseArrayInPlace = (reverseValueIn) => {
    for (let i = reverseValueIn.length - 1; i >= 0; i--) {
        reverseValueIn.push(reverseValueIn[i]);
    }
    // for (let index = 0; index < reverseValueIn.length; index++) {
    //     reverseValueIn.shift();        
    // }
    // return reverseValueIn;    
    return reverseValueIn.slice(reverseValueIn.length / 2, reverseValueIn.length);
}
let arrayValue = [1, 2, 3, 4, 5, 6, 7, "a", "b"];
console.log(reverseArrayInPlace(arrayValue));