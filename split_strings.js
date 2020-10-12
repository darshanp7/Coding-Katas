// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
    let i = 0
    let pairedStringArray = []
    while(i < str.length){
        let subString = str.substr(i, 2)
        if(subString.length < 2) subString = subString.concat("_")
        pairedStringArray.push(subString)
        i = i+2
    }
    return pairedStringArray
}

solution("Mozilla")