// Methods: functions inisde Objects are called Methods.
function personInfo() {
    // console.log('Person name is Rajkumar and age is 53');
    // console.log(`Person name is ${this.firstName}} and age is ${this.age}`);
}

const person1 = {
    firstName: 'Rajkumar',
    age: 53,
    // about: function () {
    //     // console.log('Person name is Rajkumar and age is 53');
    //     console.log(`Person name is ${this.firstName}} and age is ${this.age}`);
    // }
    about: personInfo
}
const person2 = {
    firstName: 'Rajesh',
    age: 44,
    about: personInfo
}
const person3 = {
    firstName: 'Amitabh',
    age: 79,
    about: personInfo
}

// person1.about();
// person2.about();
// person3.about();




// window object: global
// console.log(this);
// console.log(window);  //this === window (true)
// console.log(this === window);

function myFunc(){
    "use strict";
    console.log(this);
}
// myFunc();



// call(), apply() and bind() functions
function hello(){
    console.log("Hello, world!");
}

// hello();
// or
// hello.call();

function about(hobby, favourMusician) {
    console.log(this.firstName, this.age, hobby, favourMusician);
}
const user1 = {
    firstName: 'John',
    age: 36,
    // about: function(hobby, favourMusician) {
    //     // console.log(this.firstName, this.age);
    //     console.log(this.firstName, this.age, hobby, favourMusician);
    // }
}
const user2 = {
    firstName: 'Wicher',
    age: 360,
};

// user1.about.call();
// user1.about.call(user1);
// user1.about.call(this);
// user1.about.call(user2);

// user1.about();

// user1.about.call(user2, "Movies");


// apply()
// about.apply(user1, ['Movies', 'Anirudh']);



const user3 = {
    firstName: 'Rahul',
    age: 27,
    about: function () {
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake
// user3.about();

// const myFunc1 = user3.about.bind(user3); 
// myFunc1(); 




// arrow functions
// const user4 = {
//     firstName: 'John',
//     age: 34,
//     about: () => {
//         console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }

const user4 = {
    firstName: 'John',
    age: 34,
    about(){
        console.log(this.firstName, this.age);
    }
}
user4.about();