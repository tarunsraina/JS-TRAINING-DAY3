/* There are 4 new employees assign them to different roles.

    Topics covered :
            Constructor
            Methods

*/
    

function FullStackDev(name){

    this.name = name;
    this.isAdmin = true;
    this.techStack = "MERN";
    this.getResponsibilities = function() {
        console.log("Responsibilities include building a end to end websites/webapps");
    }

}

function QualityAssuranceEngineer(name){

    this.name = name;
    this.isAdmin = false;
    this.techStack = "Selenium";
    this.getResponsibilities = function() {
        console.log("Responsibilities include manual testing/automation testing");
    }

}

function AndroidDeveloper(name){

    this.name = name;
    this.isAdmin = true;
    this.techStack = "java/kotlin";
    this.getResponsibilities = function() {
        console.log("Responsibilities include building android applications");
    }

}

function IosDeveloper(name){

    this.name = name;
    this.isAdmin = true;
    this.techStack = "swift/objective C";
    this.getResponsibilities = function() {
        console.log("Responsibilities include building android applications");
    }

}

let tarun = new FullStackDev("tarun");
let akash = new QualityAssuranceEngineer("akash");
let sucharith = new AndroidDeveloper("Sucharith");
let vikas = new IosDeveloper("Vikas");


console.log(tarun.name+" works on "+tarun.techStack+(tarun.isAdmin?" and has admin accesss":" and does not have admin access"));
console.log(akash.name+" works on "+akash.techStack+(akash.isAdmin?" and has admin accesss":" and does not have admin access"));
console.log(sucharith.name+" works on "+sucharith.techStack+(sucharith.isAdmin?" and has admin accesss":" and does not have admin access"));
console.log(vikas.name+" works on "+vikas.techStack+(vikas.isAdmin?" and has admin accesss":" and does not have admin access"));


let x = prompt('enter something',0)

