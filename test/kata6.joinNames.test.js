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
});
