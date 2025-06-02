const convertToCelsius = function(temperature) {
	return +((temperature - 32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(temperature) {
	return +((temperature * 1.8) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
