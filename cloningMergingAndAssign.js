

/* You have list of users , assign them read and write permission if they are
    admin , assign only read permission if they are not */

let user1 = {name : "varun", isAdmin : true}
let user2 = {name : "sanjay" , isAdmin : false}

let users = []
users.push(user1)
users.push(user2)

let permission1 = {canRead : true}
let permission2 = {canWrite : true}

users.forEach(function(user){
    if(user.isAdmin){
        console.log(user.name+" has read as well as write permission")
        Object.assign(user,permission1,permission2);
    }else{
        console.log(user.name+" has only read permission.(No write permission)")
        Object.assign(user,permission1);
    }
})

console.log(users)


// SIMPLE CLONING

console.log("..............")
console.log("Demo on simple cloning..")


let emp = {
    name : "praveen",
    company : "ICICI",
    age : 24
}

let clonedEmp = Object.assign({},emp)

console.log("emp(original object):")
console.log(emp)
console.log("Cloned object:")
console.log(clonedEmp)

//console.log(emp.age == clonedEmp.age)
