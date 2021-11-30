class Animal {

    _age = 0;

    constructor(age) {
        this._age = age;
    }

    get age() {
        return this._age * 7;
    }

    set age(value) {
        this._age = value;
    }
}

const cat = new Animal(5);
console.log(cat.age); // 35
cat.age = 7;
console.log(cat.age); // 49