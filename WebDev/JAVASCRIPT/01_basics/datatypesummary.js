// #Primitive 

// 7 types: String, Number, Boolean, null, undefined, 
// Symbol, BigInt (scintific val)

const score= 100;
const isLoggesd = false
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)   //not same
const heros = ["shakriman", "naagraj" , "doga"];
let myObj ={
    name:"ashh",
    age:20,
}
const myFun = function(){
    console.log("Hello World");
}

console.log(typeof BigInt)
console.log(typeof myFun)

// Reference / non premetive
// Array , Objects , Funtions

/* type:

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */