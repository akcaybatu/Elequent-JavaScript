// deepEqual = (first, second) => {
//     let keysA = Object.keys(first);
//     let keysB = Object.keys(second);
//     if (first === second){
//         return true;
//     }
//     else if (typeof first != "object" || typeof second != "object" || first == null || second == null){
//         return false;
//     }
//     else if (keysA.length != keysB.length){
//         return false;
//     }
//     for (let keys of keysA) {
//         if (!keysB.includes(keys) || !deepEqual(keysA[keys], keysB[keys])) {
//             return false;
//         }
//     }
//     return true;
// }
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true