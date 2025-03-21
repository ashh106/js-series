// stack and heap

let myName = "ashh"
let anotheName = myName
anotheName = "bashh"
console.log(myName)
console.log(anotheName)
 
// stack => heap (reference)
// let , const , 

// string interpretaion
console.log(`hello my name is ${myName}`)

const gameName = new String('   aashu  ')
console.log(gameName[2]);
console.log(gameName.__proto__)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.replace('as','-'));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8 , 4)
console.log(anotheName);

console.log(myName.trim())
console.log(myName.split('a'))
// look at mbn and console to know more on strings
