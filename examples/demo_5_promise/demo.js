const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms * 1000));
}

function myPromise() {
    console.log('1');
    delay(3)
        .then(() => console.log('2'))
        .then(() => fetch('https://jsonplaceholder.typicode.com/todos'))
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.error('Error', err))
        .finally(() => console.log('3'));
}
myPromise();