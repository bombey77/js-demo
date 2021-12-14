function* generator() {
    try {
        yield 1
        yield 2
        yield 3
    } catch (err) {
        console.log('Error', err);
    }
}

const it = generator();
console.log(it.next());
console.log(it.return());
console.log(it.throw(new Error('some error text')));