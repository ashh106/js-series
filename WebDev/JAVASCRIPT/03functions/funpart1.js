function sayMyname (){
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("H")
}
// sayMyname()
function add (num1 , num2){
    console.log(num1+num2);
}
add(3 , null)

function newfun (num1 , num2)
{
    const res = num1 + num2
    return res
}
const a = newfun(3,4)
console.log("Result:", a)

function loginUser(username ="sam"){
    // if(username === undefined)  it is same as
    if(!username)
{
 console.log("Please enter a username")
 return
}    
return `${username} just logged in`
}
console.log(loginUser("ashh"))
console.log(loginUser())

