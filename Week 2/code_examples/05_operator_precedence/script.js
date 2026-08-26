console.log("--- Operator Precedence ---");

console.log(100 + 4 * 11); // 144
console.log((100 + 4) * 11); // 1144

const ageJohn = 46;
const ageJane = 19;

const wrongAverage = ageJohn + ageJane / 2;
const correctAverage = (ageJohn + ageJane) / 2;

console.log("Wrong average:", wrongAverage);
console.log("Correct average:", correctAverage);

console.log(2037 - 1991 > 2037 - 2018); // true
