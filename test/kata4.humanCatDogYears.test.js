const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("Returns Human, Cat and Dog years accurately", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    });
});

// Look Ma, no handlebars!!!
