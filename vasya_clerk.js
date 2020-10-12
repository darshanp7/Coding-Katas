function tickets(peopleInLine){
  let answer = "YES"
  let currencies = {
	  25: 0,
	  50: 0,
	  100: 0
  }

  for(let i=0; i < peopleInLine.length; i++){
	  let amount = peopleInLine[i];
	  if(amount == ticketPrice){
		  currencies[25] += 1;
	  }
	  else {
		  let changeToBeGiven = amount - ticketPrice;
		  if(changeToBeGiven == 25 && currencies[25] > 0){
			  currencies[25] -= 1;
			  currencies[amount] += 1;

		  }
		  else if(changeToBeGiven == 75 ){
  			if(currencies[50] > 0 && currencies[25] > 0){
  				currencies[50] -= 1;
  				currencies[25] -= 1;
  				currencies[amount] += 1;
  			}
  			else if(currencies[25] >= 3){
  				currencies[25] -= 3;
  				currencies[amount] += 1
  			}
  			else {
  				return "NO";
  			}
		  }
		  else {
			  return "NO";
		  }
	  }
  }
  return answer;
}

//25,25,25,100,25,50,25,100,25,25,25,100,25,50,25,100,25,25,50,100,25,50,50,50
let ticketPrice = 25;

console.log(tickets([25, 50, 25, 100]) === "YES");
console.log((tickets([25, 100]) === "NO"));
