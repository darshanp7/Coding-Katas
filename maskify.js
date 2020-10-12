function maskify(stringToMask) {
    let stringArr = stringToMask.split("")
    let i = 0
    while(i < (stringArr.length - 4)){
        stringArr[i] = '#'
        i++
    }
    return stringArr.join("")
}

console.log(maskify("4556364607935616") == "############5616")
console.log(maskify(     "64607935616") ==      "#######5616")
console.log(maskify(               "1") ==                "1")
console.log(maskify(                "") ==                 "")