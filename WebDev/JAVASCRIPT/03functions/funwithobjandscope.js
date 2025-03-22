// shopping cart - we don't know no. of parameter or args

function calcCartPrice(...num1){  // ...is rest operator or spread oppr
    return num1
}
console.log(calcCartPrice(200,344,493))
const user = {
    username: "ashh",
    price: 199
}
//  anyobjest can be used to pass any object in the parameter
function handleobj(anyobject){
console.log(   `username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleobj(user)

//--------------------let's learn about scope -------------------------------






