function filteredObject(obj, keys) {

    const resultArray = obj.map(obj => {
      const filteredObject = {}
  
      keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
          filteredObject[key] = obj[key]
        }
      });
  
       return filteredObject;
    });
  
    return resultArray
  }

const users = [{
    name:'Grigoris',
    age: 30,
    city: 'Athens',
    profession: 'IT Technician'
},
{
    name: 'George',
    age: 45,
    city: 'Thessaloniki',
    profession: 'Lawyer'
}]

keys = ['name', 'age']

console.log(filteredObject(users,keys))