// Functoins in JavaScript
function singHappyBirthday() {
    console.log("Happy birthday to JavaScript...");
}

// singHappyBirthday(); //function call, invoke, run
// singHappyBirthday();
// singHappyBirthday();

function addition(a, b) {
    let sum = a + b;
    return sum;
}

let returnValue = addition(1, 2);
// console.log(returnValue);

// Example: isEven
function isEven(num){
    return num % 2 === 0;
}

// console.log(isEven(1));

// function expression
const add = function(x, y) {
    return x + y;
  };
  
//   console.log(add(3, 5)); 
  

//   arrow function
const helloWorld = () => {
    console.log("Hello World!");
}

// helloWorld();

// example 2: 
const increment = i => i+1; // write argument directly if there is only one argument
// console.log(increment(1));



// Hoisting...
// hoisting is possible in case of function declarations only...
// not possible in case of function expressions and arrow function... 
hello(); // call before function declaration

function hello() {
    // console.log("Hello, World!");
}

// console.log(output);
var output = "Testing"; // output: undefined


// console.log(letCheck); // output: error
let letCheck = "let check";

// console.log(constCheck); // output: error
const constCheck = "const check";



// functions inside functon
function app() {
    const myFunc = () => {
        console.log("from inside myFunc");
    }

    const addTwo = (num1, num2) => num1+num2;
    // console.log("app function");
    // console.log(addTwo(1, 2));
    // myFunc();
}

app();


// lexical scope
const myVar = "value1";
function myApp() {
    // const myVar = "value2";
    function myFunction() {
        // const myVar = "value3";
        // console.log("Inside myFunction()", myVar);
    }
    // console.log(myVar);
    myFunction();
};

myApp();



// block scope vs function scope
// let and const are block scope
// var is function scope
