const name = "rahul"
const repoCount = 4

// console.log(name + repoCount + "value");

console.log('Hello my name is ${name} and  my repo count is ${repoCount}');

const gameName = new String ("rahulry-yadav-rao");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4);
console.log(newString); 

const anotherString = gameName.slice(-6,3);
console.log(anotherString);


const newStringone = "   rahul   ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://rahul.com/rahul%10yadav" 

console.log(url.replace('%10', '-'));

console.log(url.includes('rao'));

console.log(gameName.split('-'));
console.log(gameName.bold());

const arr1 = ['r', 'a', 'h', 'u', 'l'];
const arr2 = ['y', 'a', 'd', 'a', 'v'];
const arr3 = arr1.concat(arr2);

console.log(arr3);

console.log(arr1.pop('l'));