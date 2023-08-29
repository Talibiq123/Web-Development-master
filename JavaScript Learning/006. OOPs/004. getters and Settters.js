// getters and setters methods
class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1= new Person("Paddington", "brown", 8);
// console.log(person1);
// console.log(person1.fullName);
// person1.setName("Max", "Jason");
console.log(person1.fullName);