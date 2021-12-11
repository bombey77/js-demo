const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms * 1000));
}

async function myAsync() {
    try {
        console.log('1');
        await delay(3);
        console.log('2');
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.error('Error', err);
    } finally {
        console.log('3');
    }
}
myAsync();