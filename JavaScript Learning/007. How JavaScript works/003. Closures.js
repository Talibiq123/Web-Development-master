// closures: Closures in JavaScript refer to the ability of a function to "remember" the variables and their values from the outer
// (enclosing) scope even after that function has finished executing. This allows the function to maintain access to those variables and
// manipulate them, enabling powerful patterns like data encapsulation and creating functions with persistent state.
// closures: 30-40%
// analyse: 70-80%
// real example: 100%

// function can return function 
function outerFunction() {
    function innerFunction() {
        console.log("Inner Fucntion");
    }
    return innerFunction;
}
const ans1 = outerFunction();
// console.log(ans);
// ans1();

// closure example 1
function printFullName(firstName, lastName) {
    function printName(name) {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans2 = printFullName("Pushpa", "Raj");
// ans2();


// closure example 2
function hello(x) {
    const a = "varA";
    const b = "varB";
    return function() {
        console.log(a, b, x);
    }
}
// inner function will take a, b, and x with itself for using later and that act is called closures in javascripts...
const ans3 = hello("args");
// ans3();


// closure exxample 3
function myFunc(power) {
    return function(number) {
        return number**power;
    }
}
const square = myFunc(2);
const ans4 = square(3);
// console.log(ans4);



// closure example 4
function func() {
    let count = 0;
    function innerFun() {
        if (count < 1) {
            console.log("Running first time...");
            count++;
        } else {
            console.log("already run ...");
        }
    }
    return innerFun;
}
const ans5 = func();
ans5();
ans5();