console.log("--- Mini Project: Profile Summary ---");

const firstName = "John";
const lastName = "Doe";
const birthYear = 2005;
const currentYear = 2026;
const job = "student";

const fullName = `${firstName} ${lastName}`;
const age = currentYear - birthYear;
const isFullAge = age >= 18;

const summary = `${fullName} is a ${age} year old ${job}. Full age: ${isFullAge}.`;

console.log(summary);

document.querySelector("#output").textContent = summary;
