console.log('--- Strings and Template Literals ---');

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
const job = 'teacher';
const year = 2037;
const birthYear = 1991;

const oldWay = 'I am ' + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.';
console.log(oldWay);

const newWay = `I am ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(newWay);

const multiline = `This is line 1
This is line 2
This is line 3`;
console.log(multiline);
