function findShort(s){
    let length = Number.MAX_VALUE
    s.split(" ").map(word => word.length).forEach(element => {
        if(element < length) length = element
    });
    return length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3)
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3)
