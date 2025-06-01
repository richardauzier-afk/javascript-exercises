const repeatString = function(string, num) {
	let stringAdded = "";
	if(num < 0){
		return "ERROR";
	}
	for(let i = 1; i <= num; i++){
		stringAdded += string;
	}
	return stringAdded;

};

console.log(repeatString("hello",10));

// Do not edit below this line
module.exports = repeatString;
