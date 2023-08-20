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
let arr1 = ["item1", "item2"];
let arr2 = arr1;
console.log("arr1 ", arr1);
console.log("arr2 ", arr2);
arr1.push("item3"); //push only arr1
console.log("after pushing an item");
console.log("arr1", arr1);
console.log("arr2", arr2); //push automatically in arr2