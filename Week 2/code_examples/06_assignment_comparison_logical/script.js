console.log("--- Assignment Operators ---");

let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

console.log("--- Comparison Operators ---");

const ageJonas = 46;
const ageSarah = 19;
const isSarahFullAge = ageSarah >= 18;

console.log(ageJonas > ageSarah);
console.log(isSarahFullAge);
console.log(27 === "27"); //false
console.log(27 == "27"); //true

console.log("--- Logical Operators ---");

const hasID = true;
const isFullAge = true;
const isGuest = false;

console.log(hasID && isFullAge);
console.log(isGuest || hasID);
console.log(!isGuest);
