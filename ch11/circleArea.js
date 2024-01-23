function circleArea(radius){
    let area = Math.PI * Math.pow(radius, 2)
    return area.toFixed(2)
}

console.log(circleArea(5))