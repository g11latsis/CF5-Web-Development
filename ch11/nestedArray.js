const nestedArray = [0, 1, 2, [3, 4, [5], 6]]

function arrayFlat(arr,depth=1){
    return arr.flat(depth)
} 

console.log(arrayFlat(nestedArray,2))

