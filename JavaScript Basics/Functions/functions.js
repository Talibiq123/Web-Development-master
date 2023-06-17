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
