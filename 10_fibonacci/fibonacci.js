const fibonacci = function(n) {
    n = Number(n);
    const array = [];
    if(n<0) {
        return "OOPS";
    } else {
    for (i = 0; i<n; i++) {
            if (array.length === 0) {
                array.push(0);
                array.push(1);
            }
            array.push(array[i] + array[i+1]);
        }
    }
    return array[n];
};

fibonacci("8");

// Do not edit below this line
module.exports = fibonacci;
