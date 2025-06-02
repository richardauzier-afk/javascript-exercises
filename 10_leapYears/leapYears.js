const DIVISIBLE_BY_FOUR = 4;
const DIVISIBLE_BY_HUNDRED = 100;
const DIVISIBLE_BY_FOUR_HUNDRED = 400;



  
const leapYears = function(year) {
	if((year % DIVISIBLE_BY_HUNDRED === 0) && (year % DIVISIBLE_BY_FOUR_HUNDRED === 0)) return true;
	else if((year % DIVISIBLE_BY_FOUR === 0) && !(year % DIVISIBLE_BY_HUNDRED === 0)) return true;
	else return false; 
};

// Do not edit below this line
module.exports = leapYears;
