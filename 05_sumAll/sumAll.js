const sumAll = function (startNum, endNum) {
    let sum = 0;
    const array = [];
    if(startNum > 0 && endNum > 0 && typeof(startNum) == "number" && typeof(endNum) == "number"){
        if (startNum < endNum) {
            for (i = startNum; i <= endNum; ++i) {
                array.push(i);
            }
            for (i = 0; i < array.length; ++i) {
                sum += array[i];
            }
            return sum;
        }
        else {
            for (i = startNum; i >= endNum; i--) {
                array.push(i);
            }
            for (i = 0; i < array.length; i++) {
                sum += array[i];
            }
            return sum;
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
