const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const objArray = [
      {name: 'Bart'},
      {name: 'Lisa'},
      {name: 'Maggie'}
    ];
    
    expect(joinNames(objArray)).toBe("Bart, Lisa & Maggie");
  });
});
