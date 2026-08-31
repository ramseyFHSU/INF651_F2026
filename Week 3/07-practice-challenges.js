// 07 - Practice Challenges
// Predict every result BEFORE you run the file.

// Challenge 1: Conversion
const rawScore = '88';
const score = Number(rawScore);
console.log(score + 5);
console.log(typeof rawScore);
console.log(typeof score);

// Challenge 2: Coercion
console.log('10' + 2);
console.log('10' - 2);
console.log(5 + 4 + '3');
console.log('5' + 4 + 3);

// Challenge 3: Truthy / falsy
console.log(Boolean(0));
console.log(Boolean('0'));
console.log(Boolean([]));
console.log(Boolean(null));

// Challenge 4: Decision
const accountBalance = 0;
if (accountBalance === 0) {
  console.log('Your balance is exactly zero.');
} else if (accountBalance > 0) {
  console.log('You have money available.');
} else {
  console.log('Your account is overdrawn.');
}

// Challenge 5: Ternary
const isMember = false;
const price = isMember ? 20 : 30;
console.log(price);
