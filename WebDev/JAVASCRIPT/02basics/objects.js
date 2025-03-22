// objects

// litteral or constructor

// singleton
// Object.create connstructor methos - singleton

// object literals
// 
const mySym = Symbol("Key1")

const js_user = {
    name: "ashh",
    // mySym : "mykey1",
    [mySym]: "mySym",   //[Symbol(Key1)]: 'mySym'
    "new nmme" : "sab",
    age: 20,
    loc: "patna",
    email:"ashh@gmail.com",
    islogges: false,
    lastLoginDays: ["mon", "sat"]
}

console.log(js_user.email)
console.log(js_user["email"])
console.log(js_user["new nmme"]) // see doc on use of []
console.log(js_user[mySym])


js_user.email = "ashh@chat.com"
// Object.freeze(js_user)
js_user.email = "ashh@chafdfdsfdssdxt.com"
console.log(js_user)


js_user.greeting = function(){
    console.log(`Hello Js User , ${this.name}`);
}

// console.log(js_user.greeting); // [Function (anonymous)]

console.log(js_user.greeting());

// Hello Js User , ashh
// undefined