// important array methods

// forEach
const numbers = [2, 7, 9, 5];

// function myFunction(arr, index) {
//     console.log(`Index is ${index} and number is ${arr}.`);
// }

// numbers.forEach(myFunction);

// numbers.forEach(function(number, index) {
//     console.log(`index is ${index} and number is ${number}`);
// })

numbers.forEach(function(number, index) {
    // console.log(number*3, index);
});


const users = [
    {firstName: 'John', age: 25},
    {firstName: 'Wick', age: 24},
    {firstName: 'James', age: 23},
    {firstName: 'Bond', age: 22},
];

// users.forEach(function(user, index) {
//     console.log(user.firstName);
// });

users.forEach((user, index) => {
    // console.log(user.firstName, index);
});

for(let user of users) {
    // console.log(user.firstName);
}

// map ***
const numbers1 = [1, 3, 5, 2, 8];

const square = function(number) {
    return number*number;
}

const squaredArray = numbers1.map(square);
// console.log(squaredArray);


const usersName = users.map((user) => {
    return user.firstName;
});
// console.log(usersName);


// filter
// const isEven = (number) => {
//     return (number % 2 === 0);
// }
const numbers2 = [1, 3, 2, 6, 4, 8];
const result = numbers2.filter((number) => {
    return (number % 2 === 0);
});
// console.log(result);


// reduce
const numbers3 = [1, 2, 3, 4, 5];

// sum of all the numbers in array

const sum = numbers3.reduce( (accumulator, currentvalue) => {
    return accumulator+currentvalue;
});

// console.log(sum);


// Example 2nd of reduce();
const userCart = [
    {productId: 1, productName: "Mobile", price: 12000},
    {productId: 2, productName: "Laptop", price: 22000},
    {productId: 3, productName: "TV", price: 15000}
];

const result1 = userCart.reduce((totalPrice, currentProduct) =>{
    return totalPrice + currentProduct.price;
}, 0);

// console.log(result1);



// sort method
const numbers4 = [5, 9, 1200, 400, 3000];
// numbers4.sort(); //sort according to ASCII codes
numbers4.sort((a, b) => {
    return a - b;
})
// console.log(numbers4);


// price low to high & high to low
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
];
// low to high price
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
// console.log(lowToHigh);

// high to low
const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
// console.log(highToLow);



// find method
const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string) {
//     return string.length===3;
// }

// myArray.find(isLength3);
// console.log(myArray.find(isLength3));

const ans = myArray.find((string) => string.length === 3)
// console.log(ans);

const users2 = [
    {userId: 1, userName: 'John'},
    {userId: 2, userName: 'Wick'},
    {userId: 3, userName: 'James'},
    {userId: 4, userName: 'Bond'},
    {userId: 5, userName: 'Rocky'},
];
const ans2 = users2.find((user) => user.userId===3);
// console.log(ans2);


// every() method
const numbers45 = [2, 4, 6, 8,10];
const ans3 = numbers45.every((number) => number%2===0);
// console.log(ans3);


// some method
const numbers5 = [3, 2, 7, 5];

const ans4 = numbers5.some((number) => number%2===0);
// console.log(ans4);



const FlipkaCart = [
    {productId: 1, productName: "Mobile", productPrice: 30000},
    {productId: 2, productName: "Tablet", productPrice: 45000},
    {productId: 3, productName: "TV", productPrice: 8000},
    {productId: 4, productName: "MacBook", productPrice: 150000}
];

const flipAns = FlipkaCart.some((products) => products.productPrice > 100000);
// console.log(flipAns);


// fill method
// value, start, end

const meraArray = new Array(10).fill(0);
// console.log(meraArray);

const maroArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
maroArr.fill(0, 2, 5);
// console.log(maroArr);


// splice method
// start, delete, insert

const yourArray = ["item1", "item2", "item3", "item4"];

// delete items
const deletedItem = yourArray.splice(1,1);
// console.log(deletedItem);
// console.log(yourArray);


// inserted items
yourArray.splice(1, 0, "insertedItem");
// console.log(yourArray);

// insert and delete togethor
const deletePart = yourArray.splice(1, 2, "InsertedItem");
// console.log(yourArray);
// console.log(deletePart);



// Iterables
// objects on which for loop can be applied to
// Ex: Arrays, Strings are Iterables
const myName = "Jawaan";
for(let char of myName) {
    // console.log(char);
}

const items = ["item1", "item2", "item3", "item4"];
for(let item of items) {
    // console.log(item);
}

// objects are not iterable
// const userAap = {item1: "item1", item2: "item2"}
// for(let item of userAap) {
//     console.log(item);
// }
// arrays like properties means objects that have length and index
const Naam = "Pushpa"
// console.log(Naam.length);
// console.log(Naam[2]);

// Sets: are Iterable objects
// store data
// sets also have its own methods
// No index based access
// order is not guaranteed
// unique items only (No duplicates allowed)
// const numbersSet = new Set([1, 2, 3]);
// console.log(numbersSet);


const itemsYour = ["item1", "item2", "item3"];
const newSets = new Set();
newSets.add(1);
newSets.add(2);
newSets.add(3);
newSets.add(itemsYour);
// console.log(newSets);

if(newSets.has(1)) {
    // console.log("1 is present");
}
else {
    // console.log("1 is not present");
}

for(let number of newSets) {
    // console.log(number);
}

const HisArr = [1, 1, 2, 3, 4, 3, 2, 1, 2];
const uniqueArr = new Set(HisArr);
// console.log(uniqueArr);

// length of set
let len = 0;
for(let element of uniqueArr) {
    len = len + 1;
}
// console.log("Length of set: " + len);



// Map
// Map is Iterable

const person = new Map();
person.set("Name", "John");
person.set("Age", 25);
person.set(1, 1);
// console.log(person);
// console.log(person.get("Name"));

// console.log(person.keys());

for(let key of person.keys()) {
    // console.log(key, typeof key);
}


for(let key of person) {
    // console.log(Array.isArray(key));
}

for(let [key, val] of person) {
    // console.log(key, val);
}



const person1 = {
    id: 1,
    firstName: 'John',
}

const person2 = {
    id: 2,
    firstName: 'Wick',
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 8, "gender": "male"});
extraInfo.set(person2, {age: 9, "gender": "male"});
// console.log(extraInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).age);
// console.log(extraInfo.get(person2).age);



// cloning using Object.assign
const obj1 = {
    key1: 'value1',
    key2: 'value2'
}

// const obj2 = {...obj1};
// const obj2 = obj1;
const obj2 = Object.assign({}, obj1);
obj1.key3 = "value3";
// console.log(obj1);
// console.log(obj2);
 


// option chaining
const user = {
    firstName: 'Salaar',
    // address: {houseNo: 210}
}

// console.log(user.firstName);
// console.log(user?.address);
// console.log(user?.address?.houseNo);
