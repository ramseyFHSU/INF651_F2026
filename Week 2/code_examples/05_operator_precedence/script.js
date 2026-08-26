console.log('--- Operator Precedence ---');

console.log(100 + 4 * 11);    // 144
console.log((100 + 4) * 11);  // 1144

const ageJonas = 46;
const ageSarah = 19;

const wrongAverage = ageJonas + ageSarah / 2;
const correctAverage = (ageJonas + ageSarah) / 2;

console.log('Wrong average:', wrongAverage);
console.log('Correct average:', correctAverage);

console.log(2037 - 1991 > 2037 - 2018); // true
