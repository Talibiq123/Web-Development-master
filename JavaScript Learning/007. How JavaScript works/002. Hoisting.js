// Hoisting: Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing
// scope during the compilation phase, allowing them to be used before they are actually declared in the code. This can lead to
// unexpected results if not understood properly.

// case1: var
// console.log(myFunction);
// myFunction();
var myFunction = function(){
    console.log("My function");
}
// console.log(myFunction);
// myFunction();

// case2. let
// console.log(name); //error: uninitialized variable
let name =  "James";
console.log(name);

// Temporal Dead Zone (TDZ):
// The temporal dead zone in JavaScript refers to the period between the creation of a variable using `let` or `const` and its actual
// declaration in the code. During this phase, trying to access the variable results in a runtime error. This concept enforces proper
// variable declaration before usage and helps prevent unintended behavior.


// scope chain
const lastName = "Wick";
const printName = function (name) { // function expression
    const firstName = "john";
    console.log(firstName);
    console.log(lastName);
}

// Scope Chain: The scope chain in JavaScript is the hierarchy of nested functions and their respective scopes. It determines how
// variables are accessed and resolved. When a variable is referenced, JavaScript searches through the scope chain, starting from the
// innermost scope and moving outward, until it finds the variable or reaches the global scope. This mechanism ensures proper variable
// scoping and access throughout the code.