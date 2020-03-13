const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand with 3 objects", () => {
    const objArray = [
      {name: 'Bart'},
      {name: 'Lisa'},
      {name: 'Maggie'}
    ];

    expect(joinNames(objArray)).toBe("Bart, Lisa & Maggie");
  });

  test("returns string of names, seperated by commas and an ampersand with 4", () => {
    const objArray2 = [
      {name: 'Bart'},
      {name: 'Lisa'},
      {name: 'Maggie'},
      {name: 'Homer'}
    ];
       
    expect(joinNames(objArray2)).toBe("Bart, Lisa, Maggie & Homer");
  });

  test("returns single name when only one object", () => {
    const objArray3 = [
      {name: 'Bart'},
    ];
       
    expect(joinNames(objArray3)).toBe("Bart");
  });

  test("Filters out objects without a name and returns only those with a name", () => {
    const objArray4 = [
      {name: 'Bart'},
      {},
      {name: 'Lisa'}
    ];
       
    expect(joinNames(objArray4)).toBe("Bart & Lisa");
  });

  test("When no objects have a name a message is displayed indicating as such", () => {
    const objArray4 = [
      {},
      {},
      {}
    ];
       
    expect(joinNames(objArray4)).toBe("No names have been provided");
  });

  test("Returns an error message if the parameter entered is not an object", () => {
    const nonArray = "Bart";
       
    expect(joinNames(nonArray)).toBe("Error - parameter is not an object");
  });

});
