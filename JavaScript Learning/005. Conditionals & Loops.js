// if else conditions
// let age = 19;
// if (age < 18) {
//     console.log("User can not Play the Game...");
// } else{
//     console.log("User can play the Game");
// }


// let num = 15;
// if (num % 2 == 0) {
//     console.log("Even Number...");
// } else {
//     console.log("Odd Number...");
// }

// ternary operator
// if-else
// let age = 15;
// let drink;
// if(age<=5){
//     drink = "Milk";
// } else{
//     drink = "Coffee";
// }

// let age1 = 3;
// let drink = age1 >= 5? "Coffee" : "Milk";
// console.log(drink);

// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high
// let winningNumber = 19;
// let userGuess = prompt("Your guess");
// "12"
// let userGuess = +prompt("Your guess");
// 12
// console.log(typeof userGuess, userGuess);

// if(userGuess === winningNumber){
//     console.log('Your guess is right.');
// } else if(userGuess < winningNumber){
//     console.log('Too Low');
// } else {
//     console.log('Too High');
// }



// switch statement
// let day = 5;

// if(day === 0) {
//     console.log("Sunday");
// } else if(day === 1) {
//     console.log("Monday");
// } else if(day === 2) {
//     console.log("Tuesday");
// } else if(day === 3) {
//     console.log("Wednesday");
// } else if(day === 4) {
//     console.log("Thursday");
// } else if(day === 5) {
//     console.log("Friday");
// } else if(day === 6) {
//     console.log("Saturday");
// } else {
//     console.log("Invalid day");
// }

// switch(day) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//          console.log("Wednesday");
//          break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid day");
// }

// while loop
// let i = 0; // 1 2 3
// while (i <= 3) {
//     console.log(i);
//     i++;
// }
// console.log(`Current value of i is ${i} `);
// console.log('While loop');

// while loop example...
// let num = 10;
// let sum = 0;
// let i = 1;
// while(i < num) {
//     sum += i;
//     i++;
// }
// console.log(sum);

// let num = 10;
// let total = (num * (num + 1)) / 2;
// console.log(total);


// for loop
// print 0 to 9
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }


// for loop example: total of n number
// let num = 10;
// let total = 0;

// for(let i = 0; i <= num; i++) {
//     total += i;
// }
// console.log(total);


// break
// n = 100;
// for (let i = 0; i <= n; i=i+2) {
//     console.log(i);
//     if (i === 50) {
//         break;
//     }
// }
// console.log("Break come");

// continue keyword
// for(let i=0; i<=10; i++) {
//     if(i === 5) {
//         continue; //skip the 5 in the loop
//     }
//     console.log(i);
// }

// do while loop
let i = 0;
do{
    console.log(i);
    i++;
} while(i <= 10);