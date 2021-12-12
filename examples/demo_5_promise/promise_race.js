const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise1 finished.');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise2 rejected.');
    }, 2000);
});

Promise.race([promise1, promise2])
    .then((data) => console.log(data))  // Promise1 finished
    .catch((error) => console.log(error));