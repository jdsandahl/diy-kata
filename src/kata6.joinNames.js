const joinNames = objArray => {
  const names = objArray.map(person => person.name);
  const startingList = names.slice(0, names.length - 1).join(", ");

  return `${startingList} & ${names[names.length - 1]}`;
};

module.exports = joinNames;
