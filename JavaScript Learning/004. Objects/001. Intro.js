// Objects

// object is refrence type
// array are good but not sufficient for real world data
// object stores key value pairs
// object don't have index

// how to create object
// const person = {name: 'John', age:25};
// console.log(person);
// console.log(typeof person);

// how to access data from object
// console.log(person.name);
// console.log(person.age);


person = {
    name: 'John',
    age: 35,
    hobbies: ["watching moveis", "travelling"]
}
// console.log(person);
// console.log(person.hobbies);

// console.log(person["name"]);
// console.log(person['age']);
// console.log(person[name]);

// how to add key value pairs to object
// person.gender = "male";
// person["person gender"] = "male";
person["gender"] = "male";
// console.log(person["person gender"]);

const key = "email";
person[key] = "test@example.com";
// console.log(person);


// How to iterate object
// for in loop
for(let key in person) {
    // console.log(key, " : ", person[key]);
    // console.log(`${key}: ${person[key]}`); //template string
}

// object keys
// console.log(Object.keys(person));
// console.log(typeof (Object.keys(person)));

// const val = Array.isArray(Object.keys(person));
// console.log(val);

// for(let key of Object.keys(person)) {
//     console.log(person[key]);
// }



// computed properties
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
    [key1]:value1,
    [key2]:value2
}
// console.log(obj);


// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 4, 9];
const newArray = [..."abc"]; // iterable object 
// console.log(newArray);

// spread operator in object
const obj1 = {
    key1: "value1",
    key2: "value2",
    // key1: "value34"
};
const obj2 = {
    // key1: "valueUnique",
    key3: "value3",
    key4: "value4"
};

// const newObject = {...obj1, ...obj2};
// const newObject = {...obj1, ...obj2, key27: "value27"};
// const newObject = {..."abc"};
const newObject = {...["item1", "item2"]};
// console.log(newObject);


// object destructuring
const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    yaer: 1968,
    anotherfamousSong: "Kashmir"
};
// const var1  = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

// const {bandName, famousSong} = band;
// console.log(bandName);
// console.log(famousSong);

// let {bandName, famousSong: var2} = band;
let { bandName, famousSong, ...restProps} = band;
// console.log(bandName);
// console.log(restProps);


// object inside array --> very useful in real world applications...
const users = [
    {userId: 1, userName:'Talib', gender: 'male'},
    {userId: 2, userName:'Asad', gender: 'male'},
    {userId: 3, userName:'Zaid', gender: 'male'},
];
for(let user of users) {
    // console.log(user);
}

for(let user of users) {
    // console.log(user.userId);
}

for(let user of users) {
    // console.log(user.userName);
}

for(let user of users) {
    // console.log(user.gender);
}


// nested destructuring
const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

const [{userName: firstName}, , {gender}] = users;
console.log(firstName);
console.log(gender);