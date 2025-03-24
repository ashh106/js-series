// filter map :

const coding = ["js" , "py" , "c" , "rb" , "cpp"]

const values = coding.forEach((item)=>{
    return item
})

// console.log(values) we just need to return values 


const nums = [1 , 2, 3 , 4 , 5 ,6 ,7 , 8 ,  8 ,10]
// const newnum = nums.filter((i)=> i > 4)
// console.log(newnum);

// { always use return if you use scope {} }

const newnums = []
nums.forEach((num)=> {
    if (num>4){
        newnums.push(num)
    }
})
console.log(newnums)

// filter : 

// const books ={[
//     {title : 'book one' , genre : " history" , publish : 1932}
// ]}


const myval = [1,3,4,5,6,7,8,9]
const newnum = myval.map ((myval)=>{return myval + 10})
console.log(newnum)

// array.reduce()

// const intval = 0 ; 
// const sumwithint = array1.reduce (
//     (accumulator,currentcalue => accumulator + currentcalue
//     )
// )

const val = [1 , 2 , 3]
const mytot = val.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
}, 0 )

console.log(mytot);