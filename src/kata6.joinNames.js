const joinNames = objArray => {
  if (typeof objArray !== "object") {
    return "Error - parameter is not an object";
  }// returns an error message if objArray is not an object

  const names = objArray
    .filter(person => {
      return person.name === undefined ? false : true;
    }) //checks that names exist in the array and filters out those with no name
    .map(person => person.name); //adds the names to the names array

  const startingList = names.slice(0, names.length - 1).join(", ");

  return names.length > 1
    ? `${startingList} & ${names[names.length - 1]}`
    : names.length === 1
    ? `${names}`
    : "No names have been provided";
};

module.exports = joinNames;
