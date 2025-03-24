//lect 23
const users = {
    username:"ashhh",
    price : 3242,
    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
    // console.log(this);
    }
}
users.welcomeMsg()
// welcomeMsg
// this - give current context
// console.log(this);  //empty
function chai(){
    console.log(this);
}
//  arrow funtion

const pilo = () => {
    let username = "aman"
    console.log(this)
}
// pilo() empty

const curl = (n1 , n2 ) => n1 + n2;
const curltwo = (n1 , n2 ) => ({username: "raamu"}); //arrow funtion


