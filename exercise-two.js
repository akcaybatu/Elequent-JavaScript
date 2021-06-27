reverseArray = (reverseValue) => {
    let reversed = reverseValue.reverse();
    return reversed;
}
console.log(reverseArray(["A", "B", "C"]));

reverseArrayInPlace = (reverseValueIn) => {
    reverseValueIn = reverseValueIn.reverse();
    return reverseValueIn;
}
let arrayValue = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);