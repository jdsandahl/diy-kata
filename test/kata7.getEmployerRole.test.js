const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  const testEmployees = [
    {
      name: "Satti",
      role: "Developer"
    },
    {
      name: "Jenny",
      role: "Sales Associate"
    },
    {
      name: "Javid",
      role: "Human Recommended Reading Assistant"
    }
  ];

  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Javid", testEmployees)).toEqual(
      "Human Recommended Reading Assistant"
    );
  });
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Satti", testEmployees)).toEqual(
      "Developer"
    );
  });
  it("returns the employee's role in the company", () => {
    expect(getEmployerRole("Jenny", testEmployees)).toEqual(
      "Sales Associate"
    );
  });
});
