// String indexing

let firstName = "Talib";
// T a l i b
// 0 1 2 3 4 

// strings are immutables...

// console.log(firstName[3]);

console.log(firstName.length)

// last index: length - 1

console.log(firstName[firstName.length - 1])

// string in-built functions

// trim() - trim
let lastName = "   Salaar   ";
console.log(lastName.length);
lastName.trim(); //it gives new string
console.log(lastName.length); 
let newString = lastName.trim();
console.log(newString.length);

// toUpperCase(): into upper case
upper = newString.toUpperCase(); 
console.log(upper);

// toLowerCase(): into lower case
lower = newString.toLowerCase();
console.log(lower);


// string slicing
let exampleString = "TalibSaeed";
let newStr = exampleString.slice(0, 5);
console.log(newStr);