// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

let sq = 5

function findNextSquare(sq){
    let root = Math.sqrt(sq)
    let result = Number.isInteger(root) ?  Math.pow((root+1), 2) : -1  
    return result
}

console.log(findNextSquare(sq))
