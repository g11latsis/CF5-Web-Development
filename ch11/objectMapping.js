function update(obj,mappingFunction){

    const newObject = {}

    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            newObject[key] = mappingFunction(obj[key]) 
        }
    }

    return newObject
}

const latinNumbers = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};

const double = value => value * 2
const triple = value => value * 3

console.log(update(latinNumbers,double))
console.log(update(latinNumbers,triple))