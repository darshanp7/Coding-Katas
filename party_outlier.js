function findOutlier(integers){
	let bitArray = integers.map(i => isEven(i) ? 0 : 1)
	let sum = bitArray.reduce((acc, currentValue) => acc + currentValue)
	if(sum === 1){
		for(let i = 0; i < bitArray.length; i++){
			if(bitArray[i] === 1) return integers[i]
		}
	}
	else {
		for(let i = 0; i < integers.length; i++){
			if(bitArray[i] === 0) return integers[i]
		}
	}
}

function isEven(number){
	return !(number & 1)
}

let party = [2,6,8,10,3]
console.log(findOutlier(party))

