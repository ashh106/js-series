// logic control / control flow 

if(true){
    // execute when true
}
//  < , > , <= , >= , == , === , != , !== 
//  ===  same type check (int . char)
//  !== anti pattern  

//  && ||  - for multiple condn

//  if and else  

//  switch :
// redux

const month = 2;

switch (month) {  // one key
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;

    default:
        break;
}

// IMPLEMENTAION

const userEm = " ass@gmail.com"
if(userEm){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}


// falsy value

//  false , 0 , -0 , BigInt -0n , "" , null , undefine , NaN


// truthy 

// true , "0" , 'false' , " " (with space) , [], {}, function() {}

if (userEm.length === 0) {
    console.log("Array is Empty")
}

const empObj = {}
if (Object.keys(empObj).length === 0){
    console.log("Obj is empty")
}


// false == 0 , '' and 0 == '' => (gives true)


// Nullish Coalescing Operator (??); null underfined

let val1 ;
// val1 = 5 ?? 10 
// val1 = null ?? 10 
val1 = undefined ?? null ?? 80
console.log(val1)


// used in databse , fireebase - chances of gettinng null - 
// for special case


// terniary opr

// condion ? true : false

const price = 10 ; 
price >= 5 ? console.log("less than 5" ): console.log("more than 5")

