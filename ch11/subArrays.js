let brands = ["Nike","Adidas","Puma","Admiral","Reebok","Asics","Armour","Columbia","Gap"]
let chunks = []

function sliceArray(arr,chunkSize){
    if(!Array.isArray(arr) || !Number.isInteger(chunkSize) || chunkSize<=0){
        console.log("Please enter an array and a positive integer.")
        return;
    }

    while (arr.length > 0){
        chunks.push(arr.splice(0,chunkSize))
    }
}

sliceArray(brands,1)
console.log(chunks)


