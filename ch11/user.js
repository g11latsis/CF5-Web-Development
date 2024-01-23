const user ={
    username:'Grigoris',
    age: 30,
    city: 'Athens',
}

function hello(){
    console.log("Welcome " + user.username)
}

console.log('Hello ' + user.username + ' from ' + user.city)
hello()