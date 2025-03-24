// open source lect 27

//  complete till lecture 4 

// iterations 
let Array = [1 ,3, 32,4,"fsds"]
for(let index = 0 ; index < Array.length ; index++ ){
    const element = Array[index];
    console.log(element)
}
//  we can use  if else , switch , break etc;


//  while loops : lec 28

//  same as c++

// do while loops:
let h = 1;
do {
console.log(`score is ${h}`)
h++;
}
while(h<=2);

// constion  cehked in end
//  hight order loop - array loop : lect 29 
// [{}, {},{}] - obj inside of array

const arr =  [1 , 2, 4 , 5]

for (const num of arr){
    console.log(num)
    // document.write(num)
}

const greetings = " hello world"
for ( const greet of greetings){
    console.log (`each char is ${greet}`)
}

// maps

const map = new Map()
map.set("IN" , "INDIA")
map.set('USA' , "UNITES STATES")
map.set('Fr' ,"FRANCE")

console.log(map)

for (const [key, value] of map){
    console.log(key, ':-' , value)
}

const myObj = {
    'game1' : 'NFs',
    'game2' : 'Spider',
    'game3' : 'GTS'
}

// maps are iterable but objects are not 

// for (const [key , value] of myObj ){
//     console.log(key , ':-' , value)      TypeError: myObj is not iterable
// }

// map holds key value pairs
 

// can we use for ( _ in _ ) loop for array 

//  map is not iteratable 

const coding = [" js" , "ruby  " , " c++ "]
// here we use a call back funtion
coding.forEach( function(val) {
console.log(val)
})
// coding.forEach((item)=>{
//     console.log(item)
// })


// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)


coding.forEach((item ,  index , arr)=>{
    console.log(item, index , arr);
})

// [{} {} {}]  common array

const myCoding=[
    {
    langName : "javascript",
    langFile : "js"
    },
    {
    langName : "python",
    langFile : "py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.langName)
})
