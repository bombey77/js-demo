class Animal {

    static type = 'Animal';

    constructor(size) {
        this.size = size;
    }

    static getType() {
        return this.type;
    }
}

const animal = new Animal('small');
console.log(Animal.type);
console.log(Animal.getType());