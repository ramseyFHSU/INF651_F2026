console.log('--- Numbers and Special Values ---');

console.log(37);
console.log(-9.25);
console.log(2.998e8);

console.log(0.1 + 0.2);
console.log(10 / 0);           // Infinity
console.log('hello' / 2);      // NaN
console.log(NaN === NaN);      // false
console.log(Number.isNaN(NaN)); // true

// BigInt is separate from Number.
console.log(9007199254740991n);
console.log(typeof 9007199254740991n);
