function sqInRect(lng, wdth){
  let result = []
  if(lng == wdth){
    return null;
  }
  
  let max = Math.max(lng, wdth)
  let min = Math.min(lng, wdth)
  while(max != min){
    max -= min
    result.push(min)
    let tempMax = Math.max(max, min)
    let tempMin = Math.min(max, min)
    max = tempMax
    min = tempMin
  }
  result.push(min)
  return result
}

 // console.log(sqInRect(5, 5), null)
 // console.log(sqInRect(5, 3), [3, 2, 1, 1])
 // console.log(sqInRect(3, 5), [3, 2, 1, 1])
 console.log(sqInRect(20, 14) === [14, 6, 6, 2, 2, 2])