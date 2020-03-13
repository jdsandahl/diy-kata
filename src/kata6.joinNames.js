const joinNames = objArray => {
  const names = objArray.map(person => {
    return person.name !== undefined ? person.name : "Error, no name";
  }); //checks that names exist in the array and adds them to the list
  
  const startingList = names.slice(0, names.length - 1).join(", ");
  
  if (names.length > 1) {
    return `${startingList} & ${names[names.length - 1]}`;
  } else {
    return `${names}`;
  }
};

module.exports = joinNames;
