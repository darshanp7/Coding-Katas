// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"

let words = "is2 Thi1s T4est 3a"


function order(words){
    let sortedWords = {}
    words.split(" ").forEach(word => {
        let characters = word.split("")
        for(let i=0; i<characters.length; i++){
            let character = characters[i]
            if(!isNaN(character)){
                sortedWords[character] = word
            }
        }
    })
    return Object.values(sortedWords).join(" ").toString()
}

console.log(order(words))
