// javascript : lect 25
// executon context  : how to run

// code : give in java

// global execution - js is single threded

// global execution context and funtion execution context 
// doc - mong - eval execution context


// global exe => this

// memomry creation phase {}

// val1  (undefined)
// val2 

// execution phase 

// val1 <= 10 

// new executional context + exe thread 
// do both memory phase and execution phase
// addnum (undefined)
// execution-
// addnum <= val1 + val2
// fun(num 1)

// js ka sara execution thread pe hota hai 

// summary

// Types of Execution Contexts in JavaScript:
// Global Execution Context (GEC)

// Created when JavaScript starts execution.

// It creates a special object this and sets up memory.

// Variables declared outside any function belong to this context.

// Function Execution Context (FEC)

// Created when a function is called.

// Each function has its own execution context.

// The function execution context includes:

// Memory Creation Phase

// Execution Phase

// Eval Execution Context (Rarely Used)

// Created when eval() function is used.

// example: 

console.log("Start");  

let val1 = 10;
let val2 = 20;

function addNum(num1, num2) {
    return num1 + num2;
}

let result = addNum(val1, val2);
console.log("Result:", result);
console.log("End");  


// lifo - stack 

// call stack

function one() {
    console.log("one")
}
function two() {
    console.log("two")
} 
function three() {
    console.log("three")
} 
one()
two()
three()
