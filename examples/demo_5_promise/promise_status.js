const allWentWell = true;

const promise = new Promise((resolve, reject) => {
    if (allWentWell) {
        resolve('All went well!');
    } else {
        reject('All went not well!');
    }
});
promise
    .then(data => console.log(data))
    .catch(err => console.error('Error', err));

console.log(promise);