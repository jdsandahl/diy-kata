const humanCatDogYears = number => {
  const catAge =
    number <= 0 || typeof number !== "number"
      ? 0
      : number === 1
      ? 15
      : number === 2
      ? 15 + 9
      : 24 + 4 * (number - 2);

  const dogAge =
    number < 0 || typeof number !== "number"
      ? 0
      : number === 1
      ? 15
      : number === 2
      ? 15 + 9
      : 24 + 5 * (number - 2);

  return [number, catAge, dogAge];
};
//Solution using standard if statements below
/*
  let catYears;
  let dogYears;
  if (number <= 0 || typeof number !== "number") {
    return [0, 0, 0];
  }
  if (number === 1) {
    catYears = 15;
    dogYears = 15;
  }
  if (number === 2) {
    catYears = 15 + 9;
    dogYears = 15 + 9;
  }
  if (number > 2) {
    catYears = 16 + 4 * number;
    dogYears = 14 + 5 * number;
  }

  return [number, catYears, dogYears];
};
*/



module.exports = humanCatDogYears;
