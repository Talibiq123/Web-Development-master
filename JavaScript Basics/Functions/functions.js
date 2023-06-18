// Pure Fucntion: 
// 1. take some input and give same fixed output.
// 2. they cause no side effects in outside World.
function add(a, b) {
    console.log(a + b);
}
add(3, 5);
add(3, 5);
//here, add() function is pure function.

//Impure Function
let c = 10;
function sum(b) {
    console.log(c + b);
}
sum(20);
//sum is impure function. why?
//because for same inputs values it gives different output
c = 15;
sum(20);


//Function declaration: creting a function
// function func_name() {

// }
// func_name();

function pritnName() {
    console.log("Name: ", "Talib");
}
pritnName();

//function taking arguments
function printFUllName(a, b) {
    return a + b;
}
let name = printFUllName("Mohd ", "Talib");
console.log(`The full name is : ${name}`); //(`) grave accent symbol

// String Interpolation (Joining multiple strings)
let x = 1;
let y = 2;
console.log(x + " " + y);
console.log(`This is the name : ${x} ${y}`); //(`) grave accent symbol

//Function Expression
let funcVar = 10;
console.log(funcVar);
let func = function() { //Anonymous function
    console.log("func declaration");
}
func(); //Anonymous
//console.log(func);




