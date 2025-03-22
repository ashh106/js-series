// dates: declare and store

// Date: it is a object ( calculateed in milisec)
// tc39 - temporal api 


let myDate = new Date()
console.log(myDate);  //2025-03-21T17:03:20.029Z
console.log(myDate.toDateString());  

let myCreatedDate = new Date(2023, 2 , 23)
console.log(myCreatedDate.toDateString())
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000)) // in milisecont /1000 - second (we use floot to remove decimal val)

console.log(myDate.getHours()-12 , myDate.getMinutes() , myDate.getSeconds());

console.log(`${(myDate.getDay())} and the time`)
console.log(myDate.toLocaleString('default',{weekday: "long"}))

//  can be used for compairing date airbnb clone cac

