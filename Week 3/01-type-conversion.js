// 01 - Type Conversion
// Run with: node 01-type-conversion.js

console.log('--- String to Number ---');
const quantityText = '8';
const quantity = Number(quantityText);

console.log(quantityText, typeof quantityText); // 8 string
console.log(quantity, typeof quantity);         // 8 number
console.log(quantity + 2);                      // 10

console.log('\n--- Number() edge cases ---');
console.log(Number(' 72 '));       // 72
console.log(Number('72px'));       // NaN
console.log(Number(''));           // 0
console.log(Number(null));         // 0
console.log(Number(undefined));    // NaN

console.log('\n--- Checking for NaN ---');
const invalidNumber = Number('blue');
console.log(invalidNumber);                    // NaN
console.log(typeof invalidNumber);             // number
console.log(Number.isNaN(invalidNumber));      // true
console.log(invalidNumber === NaN);            // false

console.log('\n--- parseInt and parseFloat ---');
console.log(Number('18.5rem'));          // NaN
console.log(parseInt('18px', 10));       // 18
console.log(parseFloat('18.5rem'));      // 18.5
console.log(parseInt('px18', 10));       // NaN

console.log('\n--- Converting to String ---');
const temperature = 72.5;
console.log(String(temperature), typeof String(temperature));
console.log(`Current temperature: ${temperature} F`);
console.log(String(null));               // 'null'

console.log('\n--- Boolean conversion preview ---');
console.log(Boolean(1));     // true
console.log(Boolean(0));     // false
console.log(Boolean('hi'));  // true
console.log(Boolean(''));    // false
