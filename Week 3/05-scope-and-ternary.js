// 05 - Block Scope and the Ternary Operator
// Run with: node 05-scope-and-ternary.js

console.log('--- Block scope ---');
const points = 76;

if (points >= 60) {
  const insideMessage = 'Passed';
  console.log(insideMessage);
}

// Uncommenting the next line causes a ReferenceError:
// console.log(insideMessage);

console.log('\n--- Declare outside, assign inside ---');
let result;

if (points >= 60) {
  result = 'Passed';
} else {
  result = 'Retake';
}

console.log(result);

console.log('\n--- Ternary operator ---');
const ternaryResult = points >= 60 ? 'Passed' : 'Retake';
console.log(ternaryResult);

console.log(`Result: ${points >= 60 ? 'pass' : 'retake'}`);

console.log('\n--- Use ternary for short choices ---');
const isLoggedIn = true;
const buttonText = isLoggedIn ? 'Log out' : 'Log in';
console.log(buttonText);
