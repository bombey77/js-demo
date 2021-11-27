class Animal {

    static type = 'Parrot';

    static getType() {
        return 'Bird';
    }
}

console.log(Animal.type); // Parrot
console.log(Animal.getType()); // Bird

class Crocodile extends Animal {

    static type = 'Reptile'; // свойство переопределено
}

console.log(Crocodile.type); // Reptile
console.log(Crocodile.getType()); // Bird -> свойство унаследовано
