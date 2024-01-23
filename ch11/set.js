const numbers = [1, 1, 3, 4, 1, 5, 5, 6, 1];

function getSingleValues(array) {

    const set = new Set(array);

    const singleValuesArr = Array.from(set);

    return singleValuesArr;
}


const finalArr = getSingleValues(numbers);

console.log(numbers);
console.log(finalArr);