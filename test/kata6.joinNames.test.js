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

  test("returns error when Array is empty, or not an Array", () => {
    const objArray4 = [
      {},
    ];
       
    expect(joinNames(objArray4)).toBe("Error, no name");
  });


});
