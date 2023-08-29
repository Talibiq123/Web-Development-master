// prototypes
function hello() {
    console.log("hello, world!");
}

// hello();

// javascript functions === function + Objects
// func_name.name
// console.log(hello.name); //print name of function: hello

// you can add your own properties
hello.myOwnProperty = "property";
// console.log(hello.myOwnProperty);

// function provide more useful methods such as Call, bind, and apply
// console.log(hello.prototype);
// only function provide prototype property
// if (hello.prototype) {
//     console.log('function has prototype');
// } else {
//     console.log('function has no prototype');
// }

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function() {
    return "La La La";
}
// console.log(hello.prototype);  
// console.log(hello.prototype.sing());



// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }

function createUser(firstName, lastName, email, age, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}
createUser.prototype.about = function() {
    return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function() {
    return this.age >= 18;
};
createUser.prototype.sing = function() {
    return "La La La...";
};

const user1 = createUser("Rahul", "Sharma", "rahul123@gmail.com", 21, "New York");
const user2 = createUser("Arun", "Kumar", "KumarArun123@gmail.com", 50, "Chennai");
const user3 = createUser("Vikram", "Karnan", "dilli38123@gmail.com", 34, "Kanpur");

// console.log(user1);
// console.log(user1.about());



// new keyword
function createUser1(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}

createUser1.prototype.about = function () {
    // console.log(this.firstName, this.age);
}

const user4 = new createUser1("Salaar", 43);

// new keyword
// 1. empty object this
// 2. return this
// Object.create(createUser1.prototype) ==> automatically done by new keyword itself...
// // __proto__
// // // offcial ecmascript document
// // [[prototype]] 
// check


user4.about();

const user5 = new createUser("Vijay", "Anthony", "vijaylli38123@gmail.com", 54, "Manglore");
// console.log(user5);

for(let key in user1) {
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        // console.log(key);
    }
}



// let numbers = [1, 2, 3];
// or
let numbers = new Array(1, 2, 3);
// console.log(Array.prototype);
const ans = Object.getPrototypeOf(numbers);
// console.log(ans);
// console.log(numbers.prototype);
// numbers. ==> so many functions
// prototypes ==> functions ka hota h...
// console.log(numbers);

function hello1() {
    console.log("hello");
}
console.log(hello1.prototype);
hello.prototype = [];