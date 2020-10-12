//If the first day of the month is a Friday, it is likely that the month will have an Extended Weekend. That is, it could have five Fridays, five Saturdays and five Sundays.

//In this Kata, you will be given a start year and an end year. Your task will be to find months that have extended weekends and return:

function solve(a, b){
    const months = ['January', 'Febraury', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December']
    const standardMonths = ['April', 'June', 'September', 'November', 'Febraury'] //Months with less than 31 days
    const FRIDAY = 5
    let currentYear = Number(a)
    let endYear = Number(b)
    let monthsWithExtendedWeekends = []

    while(currentYear <= endYear){
        months.forEach( function(month) {
            const firstDayOfTheMonth = new Date(month + ' 1, ' + currentYear + ' 00:00:30').getDay()
            if(firstDayOfTheMonth == FRIDAY && !standardMonths.includes(month)){
                monthsWithExtendedWeekends.push(month.slice(0, 3))
            }
        })
        currentYear += 1
    }
    return formatOutput(monthsWithExtendedWeekends)
}

function formatOutput(monthsWithExtendedWeekends){
  let result = []
  result.push(monthsWithExtendedWeekends[0])
  result.push(monthsWithExtendedWeekends[monthsWithExtendedWeekends.length - 1])
  result.push(monthsWithExtendedWeekends.length)
  return result
}

console.log(solve(2016,2020)) // ,["Jan","May",5]
