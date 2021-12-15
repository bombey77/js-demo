function getValue(array, key) {
    for (let item of array) {
        console.log(item[key]);
    }
}

export default getValue;