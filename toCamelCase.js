// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const str = "The_Stealth_Warrior"

function toCamelCase(str){
  let strArray = str.split("")
  let i = 0;
  let words = {}
  let word = []
  let previousBreakCharacter = false
  while(i <= strArray.length)
  {
      if(strArray[i] == '-' || strArray[i] == '_' || i == strArray.length){
        words[word] = word.join('')
        word = []
        previousBreakCharacter = true
      }
      else{
        if(previousBreakCharacter){
            strArray[i] = strArray[i].toUpperCase()
            previousBreakCharacter = false
        }
        word.push(strArray[i])
      }
      i++
  }
  return Object.values(words).join("")
}

toCamelCase(str)