const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  }
  
];

const findTheOldest = function () {
  let output = "";
  people.reduce((p, c, i, a) => {
    const age = c.yearOfDeath - c.yearOfBirth; 
    if (age > p) {
      if (i == a.length - 1) {
        output = c.name;
      } else {
        output = c.name;
        return age;
      } 
      return output;
    } 
    return output;
  }, 0);
};

findTheOldest();

// Do not edit below this line
module.exports = findTheOldest;
