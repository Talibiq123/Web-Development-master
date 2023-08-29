// 2015 / ES6
// class keyword
// classes are fake
class CreateUser{
    constructor(firstName, lastName, email, age, address) {
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about() {
        return `${this.firstName}, ${this.age}`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "La La La...";
    }
    func(a) {
        console.log(a);
    }
}

// const user1  = new CreateUser("Salaar", "Rebel", "rebel648@gmail.com", 43, "Karnataka");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());
// console.log(Object.getPrototypeOf(user1));
// user1.func(97);



class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating Bread`;
    }
    isSuperCute() {
        return this.age >= 2;
    }
    isCute() {
        return true;
    }
}

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    eat() {
        return "modified eat: from dog class";
    }
    run() {
        return `${this.name} is running at ${this.speed}`;
    }
}

// object or instance
const tommy = new Dog("tommy", 6, 10);
console.log(tommy);
console.log(tommy.run());
console.log(tommy.eat());
// console.log(tommy.isCute());
// const hourse = new Animal("Jackey", 15);
// console.log(hourse);
// hourse.eat();