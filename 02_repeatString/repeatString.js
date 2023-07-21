const repeatString = function(response, times) {
    if (times < 0) {
        return 'ERROR'
    }
    let string = "";
    for (let i = 0; i < times; i++) {
        string += response;
      }
      return string;
};

// Do not edit below this line
module.exports = repeatString;
