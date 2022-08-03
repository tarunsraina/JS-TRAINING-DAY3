

// Method examples and this keyword

let robot = {
    name : "ROBO v1.0",
    age :  "2 days",
    sayHi(){
        console.log("Hiiiiiii!!"+" I am "+this.name+"!!!")
    },
    sayHello(){
        console.log("Hellooooo!!");
    },
    sayBye(){
        console.log("Bye, see you tomorrow!")
    },
    getAge(){
        console.log("I am "+this.age+" old.")
    }

}

robot.sayHello()
robot.sayHi()
robot.getAge()
robot.sayBye()



let robot2 = {
    name : "ROBO V2.1",
    age : "34 days",
    sayHi(){
        console.log("Hiiiiiiiiiiii!!!")
    },
    sayHello(){
        console.log("Hello from "+this.name);
    },
    getAge(){
        console.log("I am "+this.age+" old!");
    },
    sayBye(){
        console.log("See you Bye!")
    }
}

console.log("----------------------")

robot2.sayHi()
robot2.sayHello()
robot2.getAge()
robot2.sayBye()












