// Array 

// what happen behind the scene

const myArr = [1 , 2 , 3] //  they are resizable
console.log(myArr[0])

const myhero = ["ashh", "mydad" , "mymom", "mysis"]
console.log(myhero[3]);

// shallow copy - same ref point - cahnge with ref
// deep copy - no change with ref (copies do not share same ref)
// methods in js 

myArr.push(432)
myArr.push(8)
myArr.push(42)
myArr.push(8)
myArr.pop() //undefined
console.log(myArr[3])
myArr.unshift(9) //add to the begin
myArr.shift()
myArr.shift()
console.log(myArr)
console.log(myArr.indexOf(2))
console.log(myArr.includes(9))
const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr) //converted in string using join()
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log("B", myn1);
const myn2 = myArr.splice(1,3)
console.log("C", myn2);

// --------------------------------------------------------------------------------

// multi - tasking 

// Array part 2 : 
// look for prototype in console of inpect section of browser

const hero = ["cap" , "thor" , "iron"]
const dc_hero = ["wonder" ,"superman" ,"batman"]
// dc_hero.push(hero);
const allhero = dc_hero.concat(hero);
console.log(allhero);
console.log(hero[2][2]);
const spread_hero = [...hero , ...dc_hero]
console.log(spread_hero)


const an_array= [1 , 2 , 4 , [4 , 5 , 6] , 7, [6 , 7 ,[8 , 9], 10 ], 11 , [[[0,12],13,[[]]]]]
const flat_array = an_array.flat(Infinity)
console.log(flat_array)


// data scrapping - \
console.log(Array.from("ashh"))
console.log(Array.isArray("ashh"))
console.log(Array.from({name:"ashh"})) //intresting intervie  **
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score1,score3,score2))