const add = (a, b) => {
    return a + b
};
// const add = (a, b) => {
//     a + b;
// }
// const add = (a, b) => a + b;

// const getFirst = array => array[0];

// compile error => Фигурные скобки, которые необходимо использовать для описания объектного литерала, выглядят так, будто в них пытаются заключить тело функции, что вызывает ошибку. Для того чтобы указать системе на то, что имеется в виду именно объектный литерал, нужно заключить его в круглые скобки.
// (name, description) => { name: name, description: description };
(name, description) => ({ name: name, description: description });

const test = {
    name: 'test object',
    createAnonFunction: function () {
        return function () {
            console.log(this.name); // undefined
            console.log(arguments); // {}
        };
    },

    createArrowFunction: function () {
        return () => {
            console.log(this.name); // test object
            console.log(arguments); // { '0': 'hello', '1': 'world' }
        };
    }
};

const anon = test.createAnonFunction('hello', 'world');
const arrow = test.createArrowFunction('hello', 'world');
anon();
arrow()

