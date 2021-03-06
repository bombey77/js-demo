function Person(name, sureName) {
    this.name = name;
    this.sureName = sureName;
}

Person.prototype.getInfo = function () {
    return `name = ${this.name}, sureName = ${this.sureName}`;
}

function Child(name, sureName, age) {
    Person.call(this, name, sureName);
    this.age = age;
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;

Child.prototype.getChildInfo = function () {
    return `name = ${this.name}, sureName = ${this.sureName}, age = ${this.age}`;
}

let person = new Person('roman', 'moto');
console.log(person);

let child = new Child('john', 'doe', 35);
console.log(child);