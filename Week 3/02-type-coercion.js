// 02 - Type Coercion
// Run with: node 02-type-coercion.js

console.log('--- + can concatenate strings ---');
console.log('Level ' + 4);       // 'Level 4'
console.log('7' + 2);            // '72'
console.log(2 + 3 + ' points');  // '5 points'
console.log('points: ' + 2 + 3); // 'points: 23'

console.log('\n--- Other arithmetic operators use numeric behavior ---');
console.log('21' - '9'); // 12
console.log('6' * '7');  // 42
console.log('84' / 2);    // 42
console.log('85' % '43'); // 42
console.log('3' ** '4');  // 81
console.log('20' - 'cat'); // NaN

console.log('\n--- Equality ---');
console.log('5' == 5);   // true: loose equality coerces
console.log('5' === 5);  // false: strict equality does not coerce
console.log('5' !== 5);  // true

console.log('\n--- Relational comparison ---');
console.log('20' < '9');                  // true: string comparison
console.log(Number('20') < Number('9'));  // false: numeric comparison

console.log('\n--- Follow the intermediate types ---');
let a = '5' + 3 - 1;
let b = 4 + 3 + '2' + 1;
let c = '20' - '6' - 4 + '1';

console.log(a, typeof a); // 52 number
console.log(b, typeof b); // 721 string
console.log(c, typeof c); // 101 string
