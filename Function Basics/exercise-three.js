//Bean Counting
function countBs(bean){
    let n = 0;    
    for (let a = 0; a < bean.length; a++){
        if (bean[a] == "B"){
            n += 1;
        }
    }    
    return n;
}
countBs("BaBaBa");

function countChar(beanny, letter){
    let m = 0;    
    for (let b = 0; b < beanny.length; b++){
        if (beanny[b] == `${letter}`){
            m += 1;
        }
    }    
    return m;
}
countChar("BaBaBaaaaaa", "a");