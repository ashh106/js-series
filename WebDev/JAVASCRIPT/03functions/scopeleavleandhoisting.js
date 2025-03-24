// scope day 3/4 - lec 22
// nested scope
// cloures _ dom - document object modle

function one(){
    const username = "ashh"
    function two(){
        const web ="youtubue"
        console.log(username);
    }
    // console.log(web)
    two() 
}
one() // one => two

// memory diagram 

// child and use parent function

if(true){
    const username = "ram"
    if(username==="ram"){
        const web = "whatsapp"
        console.log(username +" "+ web)
    }
    // console.log(web)
}

function addone(num){
return num + 1 ;
}
console.log(addone(3));


// hoisting - tree - var , function 
