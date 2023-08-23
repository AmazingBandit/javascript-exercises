const findTheOldest = function(array) {
  return array.reduce((oldestPerson, currentPerson) => {
    const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
  return oldestAge > currentAge ? oldestPerson : currentPerson;
});
}

const getAge = function(birth, death) {
  if(!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

module.exports = findTheOldest;

