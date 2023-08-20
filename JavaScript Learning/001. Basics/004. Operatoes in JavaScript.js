// typeof operator
// data types
// string "Talib"
// numbers: 2, 4, 1, 6
// booleans
// undefined
// null 
// BigInt
// Symbol

// let age = 26;
// let firstName = 'John';
// console.log(typeof(age))
// console.log(typeof(firstName))

// // convert number into string
// // numer + string = string
// console.log(typeof(age + ""))


// // convert string into Number
// let myString = "32"
// console.log(typeof(myString))
// num = +myString
// console.log(typeof(num))


// let age2 = 25;
// str1 = String(age2)
// console.log(typeof(age2))


// let string1 = "Mohd";
// let string2 = "Talib"
// let fullName = string1 + " " + string2;
// console.log(fullName)

// let strr1 = "10";
// let str2 = "11";
// let newStr = +strr1 + +str2;
// console.log(newStr)
// console.log(+"newStr");


// template string
// let age = 22;
// let firstName = "John";

// "My name is John and my age is 25."
// let aboutMe = "My name is "+ firstName + " and my age is "+ age;
// console.log(aboutMe);

// let aboutMe  = `My name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);


// undefined
// let lastName;
// console.log(typeof(lastName))

// Null
let nullVariable = null;
console.log(nullVariable);
console.log(typeof nullVariable) //Ans: object --> Bug/Error


// BigInt
let myNumber = BigInt(126461494313624243);
let myNum = 132n;
console.log(typeof myNum)
console.log(typeof myNumber);
console.log(Number.MAX_SAFE_INTEGER);


// Boolean & Comparison Operator...
let num1 =5;
let num2 = 7;

// Boolean: true, false
console.log(num1 > num2);

// == vs ===
let n1 = 9;
let n2 = 9;
let n3 = "9";
console.log(n1 === n2);
console.log(n1 === n3);

// != vs !==
console.log(n1 != n2);
console.log(n1 !== n3);


// truthy and falsy values
//  flasy: flase, "", null, undefined, 0
 
let firstName = ""; //firstName = false, null, undefined, 0

if (firstName) {
    console.log(firstName);
} else{
    console.log("first kinda empty");
}

// truthy value = "abc", 1, -5, etc...

// and, or operators
// and operators
let firstName1 = "John";
let user_age = 22;
if (firstName1[0] === "J" && user_age > 15) {
    console.log(true);
}

// or operators

if (firstName1[0] === "J" || user_age > 156) {
    console.log(true);
}

// not operators (!)
let n = false;
if (n) {
    console.log(n);
}
console.log(n);
console.log(!n);