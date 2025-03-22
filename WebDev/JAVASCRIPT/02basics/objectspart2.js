// singletone 
// const tinderuser = new Object()

const tinderuser = {}
tinderuser.id = "123ash"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false
console.log(tinderuser);
// like dictionary in python
const regularuser = {
    email: "some!gamil.com",
    fullname:{
        firstaname: "ashh",
        lastnaem: "cahnga",
    }
}
console.log(regularuser.fullname?.firstaname);


// merge

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "c"}
// static method
const onj3 = Object.assign({}, obj1 , obj2)  //assign targer => source
console.log(onj3)


const obj3 = {...obj1 , ...obj2}
console.log(obj3);

// array of obj
const users = [
    {
        id: 1,
        email: "ass@gmail.com",
    },
    {
        hi: "ashh"
    },
]
console.log(users[1].hi)


console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("id"));