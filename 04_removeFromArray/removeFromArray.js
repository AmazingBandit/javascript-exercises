const removeFromArray = function (oldArray, ...args) {
  for (arg of args) {

    const index = oldArray.indexOf(arg);
    
    if (index != -1) {
      oldArray.splice(index, 1);
    }
  }
  return oldArray;
};

// removeFromArray([1, 2, 3, 4], 3);
// //([1, 2, 4]);
// removeFromArray([1, 2, 3, 4], 3, 2);
// //([1, 4]);
// removeFromArray([1, 2, 3, 4], 7, "tacos");
// //([1, 2, 3, 4]);
// removeFromArray([1, 2, 3, 4], 7, 2)
//   //[1, 3, 4]

// removeFromArray([1, 2, 3, 4], 1, 2, 3, 4);
// //([]);
// removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
// //([2, "ho"]);
// removeFromArray([1, 2, 3], "1", 3);
//([1, 2]);
// Do not edit below this line
module.exports = removeFromArray;
