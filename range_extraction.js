function solution(list){
	let i = 0;
	let range = "";

	while(i < list.length){
		let startIndex = i;
		let endIndex = i + 1;
		let prev = list[startIndex];
		let curr = list[endIndex];
		if(Math.abs(prev - curr) != 1){
			range += String(prev) + ",";
			i++;
		}
		else{
			endIndex = rangeCheck(i, list);
			if(endIndex - startIndex < 2) {
				for(let i = startIndex; i <= endIndex; i++){
					range += String(list[i]) + ",";
				}
			}
			else{
				let rangeStr = "";
				rangeStr += String(list[startIndex]) + "-" + String(list[endIndex]) + ",";
				range += rangeStr;
			}
			i = endIndex+1;
		}
	}
	return range.slice(0, -1);
}

function rangeCheck(startIndex, list){
	let i = startIndex;
	let endIndex = startIndex;
	while(i < list.length){
		if(Math.abs(list[i+1] - list[i]) != 1){
			endIndex = i;
			break;
		}
		else{
			i++;
		}
		endIndex = i;
	}
	return endIndex;
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20")