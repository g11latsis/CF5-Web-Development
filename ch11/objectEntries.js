function objectToUppercase(obj,callback){
    const upperCaseObject = {}

    for (const[key,value] of Object.entries(obj)){
        upperCaseObject[callback(key)] = value
    }
    return upperCaseObject
}

const latinNumbers = {
    a: 'i',
    b: 'ii',
    c: 'iii',
    d: 'iv',
    e: 'v'
};

callback = str => str.toUpperCase()

console.log(objectToUppercase(latinNumbers,callback))