function* userName() {
    const question = yield 'What is your name?'
    console.log(question);
    if (question !== "Mario") return "You are not Mario!";
    return "Hi, Mario!";
}

const it = userName();
const q = it.next().value; // Итератор задаёт вопрос
console.log(q);
const a = it.next("John").value; // Получен ответ на вопрос
console.log(a);


function* increment() {
    let id = 1;
    while (true) {
        const increment = yield id;
        if (increment != null) {
            id += increment;
        } else {
            id++;
        }
    }
}
const incr = increment();
console.log(incr.next());
console.log(incr.next());
console.log(incr.next());
console.log(incr.next(3));
console.log(incr.next());