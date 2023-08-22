// intro
// fruits = ["apple", "banana", "grapes", "mango"];
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// fruits[2] = "pine apple";
// console.log(fruits);

// nums = [1, 2, 3, 4, 5];
// console.log(nums);

// mixed = [1, 2.5, "string", null, undefined];
// console.log(mixed);

// type of array
// let obj = {};
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));


// array: push, pop and shift, unshift
// fruits.push("guava");
// console.log(fruits);


// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log(poppedFruit);


// unshift
// fruits.unshift("Tomato");
// console.log(fruits);

// shift
// let removedFruits = fruits.shift();
// console.log(removedFruits);
// console.log(fruits);

// push & pop are faster than shift and unshift



// primitive vs refrence datatypes
// num1 = 7;
// num2 = num1;
// console.log("value of num1 is ", num1);
// console.log("value of num2 is ", num2);

// num1++;
// console.log("values after incremnting...");
// console.log("value of num1 is ", num1);
// console.log("value of num2 is ", num2);

// refrence type
// array
// let arr1 = ["item1", "item2"];
// let arr2 = arr1;
// console.log("arr1 ", arr1);
// console.log("arr2 ", arr2);
// arr1.push("item3"); //push only arr1
// console.log("after pushing an item");
// console.log("arr1", arr1);
// console.log("arr2", arr2); //push automatically in arr2

// how to clone array
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"]; don't use for cloning
// let array2 = array1.slice(0);//fastest method //used for clonning
// let array2 = [].concat(array1); //use for cloning

// spread operator
// let array2 = [...array1] //most commonly used...

// array1.push("item3");

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray,  "item3", "item4"];
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);


// for loop in arrays
// let fruits = ["Apple", "Banana", "Grapes", "Orange", "Strawberry", "Plum", "Mango", "Watermelon", "Cherry"];
// for(let i=0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// console.log(fruits[fruits.length - 1]);



// use const for creating array
const vegetables = ["Potato", "Tomato"];
vegetables.push("Onions");
// console.log(vegetables);

const fruits1 = ["apple", "banana", "mango"];
let i = 0;
while(i<fruits1.length) {
    // console.log(fruits1[i]);
    i++;
}


// for of loop
// const fruits = ["Apple", "Mango", "Banana"]
// for(let fruit of fruits){
//     console.log(fruit);
// }
// console.log(" ");
// for in loop
// const fruits = ["apple", "banana", "mango"];

// for (const index in fruits) {
//     console.log(index, fruits[index]);
// }
// console.log(" ");

// array destructuring
// simple 
const myArray = ["value1", "value2", "value3", "value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myVar1", myVar1);
// console.log("value of myVar2", myVar2);

// by array destructuring
// let [myVar1, myVar2, myVar3] = myArray; //Imp
let [myVar1, myVar2, ...myNewArray] = myArray;
console.log("value of myVar1", myVar1);
console.log("value of myVar2", myVar2);
console.log(myNewArray);


let [ver1, ver2, , ,ver3] = myArray;
console.log(ver3);