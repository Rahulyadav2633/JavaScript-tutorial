let myName = 'Rahul       '
// console.log(myName.truelength);

let myHeroes = ["Spiderman","Hulk"]

const heroPower = {
    thor: "hammer",
    ironman: "repulsor",

    getSpiderPower: function(){
        console.log(`Spider Power is ${this.Spiderman}`);

        
    }
}

Object.prototype.rahul = function(){
    console.log("Hello, I am Rahul");
}
Array.prototype.heyRahul = function(){
    console.log("Hello I am powered");

}

// heroPower.rahul();
// myHeroes.rahul();
myHeroes.heyRahul();
// heroPower.heyRahul();



// inheritance

const user = {
    name: 'Rahul',
    age: 25,
}

const teacher = {
    name: "Rahul",
}

const teachingSupport = {
    subject: "Math",
}

const isAvailable = {
    present: true,
    __proto__: teachingSupport
}

teacher.__proto__ = isAvailable

// console.log(isAvailable);
// console.log(user);
// console.log(teacher.__proto__);

// modern structure

Object.setPrototypeOf(isAvailable,teachingSupport);

let anotherUser  = "yadav         "
 
String.prototype.trueLength = function(){
    // console.log(`${this}`
    // console.log(`${this.name}`);
    console.log(`This is Length :${this.trim().length}`);
}
anotherUser.trueLength();


