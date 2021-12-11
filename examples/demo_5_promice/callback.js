console.log('1');

function printName(name) {
    console.log(name);
}

function callBack(name, print) {
    setTimeout(() => {
        print(name);
    }, 0);
    print(name);
}

callBack('userName', printName);

console.log('2');
