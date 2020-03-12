const joinNames = objArray => {
  const names = objArray.map(person => person.name);

  return `${names[0]}, ${names[1]} & ${names[2]}`;
  //return "Bart, Lisa & Maggie";
};

module.exports = joinNames;
