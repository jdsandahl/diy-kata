const joinNames = objArray => {
  const names = objArray
    .filter(person => {
      return person.name === undefined ? false : true;
    })//checks that names exist in the array and filters out those with no name
    .map(person => person.name); //adds the names to the names array

  const startingList = names.slice(0, names.length - 1).join(", ");

  if (names.length > 1) {
    return `${startingList} & ${names[names.length - 1]}`;
  } else if (names.length === 1) {
    return `${names}`;
  } else {
    return "No names have been provided";
  }
};

module.exports = joinNames;
