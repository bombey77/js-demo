class Animal {

    constructor() {
        console.log('Create new Animal');
    }

    printClassName() {
        console.log('Animal');
    }
}

class Dog extends Animal {

    constructor() {
        super();
        console.log('Create new Dog');
    }

    printClassName() {
        console.log('Dog');
    }
}

const animal = new Animal();
animal.printClassName(); // Animal

const dog = new Dog();
dog.printClassName(); // Dog