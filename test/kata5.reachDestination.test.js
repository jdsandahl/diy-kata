const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe("I should be there in 4.5 hours");
    expect(reachDestination(33, 10)).toBe("I should be there in 3.5 hours");
    expect(reachDestination(45, 10)).toBe("I should be there in 4.5 hours");
    expect(reachDestination(56, 10)).toBe("I should be there in 6 hours");
    expect(reachDestination(0, 10)).toBe("I should be there in 0 hours");
  });
});
