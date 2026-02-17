const name = "gulshan"
const repoCount = 50

// console.log( name + repoCount +"value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String('gulshan-gc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase()) ;
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'));

const newString =gameName.substring(0,4)
console.log(newString) 

const anotherString = gameName.slice(-7,5);
/*
slice(start, end)

If start is negative
start = string.length + start
*/
console.log(anotherString)

const newStringOne = "  Gulshan  "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes the start and end spaces from the string

const url = "https://gulshan.com//gulshan%30kumar"
console.log(url.replace('%30','_'))

console.log(url.includes('hitesh')) // check whether the url have the string hitesh in it or not
console.log(gameName.split('-'))