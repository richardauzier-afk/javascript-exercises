const sumAll = function (start, end) {
	let sum = 0;
	
	if(start > end){
		let temp = start;
		start = end;
		end = temp;	
	}
	if(start < 0 || end < 0) return 'ERROR';
	
	if(!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR'; 
	
	if(!typeof start == 'number' || !typeof end == 'number') return 'ERROR';

	
	for(let i = start; start <=end; start++){
		sum += start;	
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
