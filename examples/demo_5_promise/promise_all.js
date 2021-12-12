const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise1');
    }, 2000);
}).then((data) => console.log(data));

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise2');
    }, 3000);
}).then((data) => console.log(data));

Promise.all([promise1, promise2])
    .then(() => console.log('Promise.all finished.'))
    .catch(err => console.error('Error', err));