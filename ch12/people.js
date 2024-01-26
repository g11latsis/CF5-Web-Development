const people = [
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 35},
]

const youngs = people.filter(p => p.age < 30)
console.log(youngs)

const names = people.map(p => p.name)
console.log(names)
