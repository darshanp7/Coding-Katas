function solution(number){
  if(number < 3) return 0
  let counter = 3
  let resultSet = new Set()
  while(counter < number){
    if(counter % 3 == 0 || counter % 5 == 0){
        resultSet.add(counter)
    }
    counter++
  }
  return Array.from(resultSet).reduce((acc, curr) => acc + curr, 0)
}

console.log(solution(6))