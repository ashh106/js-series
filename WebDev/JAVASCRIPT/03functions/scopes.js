// global and local scope :

let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner: ", a)
}

console.log(a);
// console.log(b);
console.log(c);
// var value is acced outside the scope - so don't use it

// windows and node ke andar scope 

// browser - inspect 
// browser - node - both have diffrent scope 

