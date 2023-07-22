const convertToCelsius = function(fahrenheit) {
  // (F-32)*(5/9) = C
  if ((fahrenheit-32)*(5/9)%1 == 0) {
    return celsius = +((fahrenheit-32)*(5/9)).toFixed(0); 
  } else {
  return celsius = +((fahrenheit-32)*(5/9)).toFixed(1); }
};

const convertToFahrenheit = function(celsius) {
  // (C*(9/5))+32 = F
  if(((celsius*(9/5))+32)%1 == 0) {
  return fahrenheit = +((celsius*(9/5))+32).toFixed(0);
  } else {
    return fahrenheit = +((celsius*(9/5))+32).toFixed(1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};