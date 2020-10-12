// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

binaryArray = [1, 0, 1, 1]

const binaryArrayToNumber = arr => {
  return arr.
  map((x, i) => {
    return Math.pow(2, ((arr.length - 1) - i)) * x
  }).
  reduce((acc, curr) => acc + curr)
}

console.log(binaryArrayToNumber(binaryArray))