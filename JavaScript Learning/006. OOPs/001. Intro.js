// Object Oriented Programming
const user1 = {
    firstName: 'Talib',
    lastName: 'Saeed',
    email: 'talibxyz123@gmail.com',
    age: 26,
    address: "123 Main St",
    about: function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function() {
        return this.age > 18;
    }
}
// const aboutUser1 = user1.about();
// console.log(aboutUser1);

// function:
// 1. create Object
// 2. add key value pairs
// 3. and return the object

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function() {
        return `${this.firstName} is ${this.age} years old.`;
    },
    user.is18 = function() {
        return this.age > 18;
    }
    return user;
}

const user2 = createUser('Jason', 'Bourn', 'jasonbourn123@gmail.com', '32', 'Baker street');
// console.log(user2);
// console.log(user2.is18());
// console.log(user2.about());

const user3 = createUser('John', 'Wick', 'jasonbourn123@gmail.com', '32', 'Baker street');
const user4 = createUser('James', 'Bond', 'jasonbourn123@gmail.com', '32', 'Baker street');
// Every time, We create a new method then every time both function will be made that occupied lots of memory




const obj1 = {
    key1: 'value1',
    key1: 'value2'
}

const obj2 = Object.create(obj1); // {}
// there is one more way to create empty object
obj2.key3 = 'value3';
// obj2.key2 = 'unique';
console.log(obj2);
// console.log(obj2.key2);

// this is happening
// console.log(obj2.__proto__);
