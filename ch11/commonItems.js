const arr1 = [1,2,3,4,5,6,7,8,9,10]
const arr2 = [2,4,6,8,10,12,14,16,18,20]
let x = 6

function commonItems(arr1,arr2){

    if((!Array.isArray(arr1) || !Array.isArray(arr2))){
        console.log("Please enter two arrays")
        process.exit()
    }
    const set1 = new Set(arr1)
    const commonItems = arr2.filter(item => set1.has(item))
    return commonItems;
}

console.log(commonItems(arr1,arr2))
