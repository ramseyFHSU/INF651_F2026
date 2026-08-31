// 04 - if, else if, and else
// Run with: node 04-if-else.js

console.log('--- Simple if statement ---');
const temperature = 35;

if (temperature >= 32) {
  console.log('Water will not freeze under normal conditions.');
}

console.log('Weather check complete.');

console.log('\n--- if / else ---');
const age = 16;

if (age >= 18) {
  console.log('You can register for the adult event.');
} else {
  const yearsLeft = 18 - age;
  console.log(`You need to wait ${yearsLeft} more year(s).`);
}

console.log('\n--- else if chain ---');
const score = 83;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

console.log('\n--- Ordering matters ---');
const speed = 78;

if (speed > 80) {
  console.log('Very high speed');
} else if (speed > 65) {
  console.log('High speed');
} else {
  console.log('Normal range');
}
