class Animal {

    static type = 'Fish';

    constructor(size) {
        this.size = size;
    }

    static getType() {
        return 'Bird';
    }
}

const animal = new Animal('small');
console.log(Animal.type);
console.log(Animal.getType());