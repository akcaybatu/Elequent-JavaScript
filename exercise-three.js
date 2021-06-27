let myList = {a: 1};

arrayToList = (myArray) => {
    Object.assign(myList, {a: 2});
}
arrayToList();
console.log(myList);