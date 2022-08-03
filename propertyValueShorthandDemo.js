

let user1 = createUser("Tarun",22,true);
let user2 = createUser("Phani",25,true);
let user3 = createUser("shreesha",42,false);
let user4 = createUser("pranav",24,false);
let user5 = createUser("nirmal",32,true);
let user6 = createUser("Yadunandan",17,false);

let users = [user1,user2,user3,user4,user5,user6]

function createUser(name,age,likes_cricket){
    return {
        name,
        age,
        likes_cricket
    }
}

console.log("Displaying all user names:");

users.forEach(function(user){

    if(user.likes_cricket){
        console.log(user.name+" aged "+user.age+" likes cricket");
    }else{
        console.log(user.name+" aged "+user.age+" does not like cricket");
    }
})

