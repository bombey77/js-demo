class Person {

    constructor(name, sureName) {
        this.name = name;
        this.sureName = sureName;
    }

    getInfo() {
        return `name = ${this.name}, sureName = ${this.sureName}`;
    }
}

class Child extends Person {

    constructor(name, sureName, age) {
        super(name, sureName);
        this.age = age;
    }

    getChildInfo() {
        return `name = ${this.name}, sureName = ${this.sureName}, age = ${this.age}`;
    }
}

let person = new Person('roman', 'moto');
console.log(person);

let child = new Child('john', 'doe', 35);
console.log(child);