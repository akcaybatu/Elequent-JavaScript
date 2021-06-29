arrayToList = (array) => {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};       
    }
    return list;
}
console.log(JSON.stringify(arrayToList([1, 2, 3, 4, 5, 6, 7])));

listToArray = (list) => {
    let myArray = [];
    let item = list;
    while(item){
        myArray.push(item.value);
        item = item.rest;
    }
    return myArray;
}
console.log(listToArray(arrayToList([10, 20, 30])));

prepend = (first, lists) => {
    let node = listToArray(lists);
    node.unshift(first);
    node = arrayToList(node);
    return node;
}
console.log(prepend(10, prepend(20, null)));

nth = (li, n) => {
    let elem; 
    let cnt = 0;
    for(let i=li; i; i=i.rest, cnt++) {
      if(cnt==n) {
        elem=i.value;
        break;
      }
    }
    return elem;
  }
  console.log(nth(arrayToList([10, 20, 30]), 1));