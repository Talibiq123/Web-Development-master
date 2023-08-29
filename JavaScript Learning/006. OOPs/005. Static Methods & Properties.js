// static methods and properties
class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo() {
        return "Static function";
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
console.log(Person.classInfo());