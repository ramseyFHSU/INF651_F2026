// 03 - Truthy and Falsy Values
// Run with: node 03-truthy-falsy.js

console.log("--- Common falsy values ---");
const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN];

for (const value of falsyValues) {
  console.log(value, "=>", Boolean(value));
}

console.log("\n--- Truthy values that surprise beginners ---");
console.log(Boolean("false")); // true
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(Infinity)); // true

console.log("\n--- Check what you actually mean ---");
const tasks = [];
if (tasks.length > 0) {
  console.log("You have tasks");
} else {
  console.log("No tasks yet");
}

console.log("\n--- The zero bug ---");
const discount = 0;
if (discount) {
  console.log(`Discount: ${discount}%`);
} else {
  console.log("This branch runs even though 0 is a real value.");
}

console.log("\n--- Precise missing-value checks ---");
console.log(discount !== undefined); // true
console.log(discount != null); // true (not null and not undefined)

if (discount !== null && discount !== undefined) {
  console.log(`Discount: ${discount}%`);
} else {
  console.log("No discount was given");
}

console.log("\n--- ?? compared with || ---");
console.log(discount ?? 10); // 0
console.log(discount || 10); // 10

const nickname = "";
console.log(nickname ?? "Guest"); // ''
console.log(nickname || "Guest"); // 'Guest'

console.log("\n--- Boolean coercion in conditions ---");
const username = "Maya";
if (username) {
  console.log("Username exists");
}
console.log(Boolean(username));
console.log(!!username);
