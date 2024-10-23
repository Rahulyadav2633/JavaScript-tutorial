// Primitive types

//  7 types : String ,Number, Boolean, null,undefined,Symbol,BigInt

// Reference types(non primitive)

// Array, objects, Functions

const score = 100
 
const isLoggedIn = false

const outSideTemp = null
let userEmail;

const id = Symbol('12345')
const anotherId = Symbol('12345')

console.log(id === anotherId);

const bigNumber = 39938338567479330n

const heros = ["Bhagat Singh", "shaktiman"];

let myObj = {
    name:'Rahul',
    age : 21,
}

const myFunction = function() {
        console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof score);
console.log(typeof heros);
console.log(typeof Symbol);

// stack(primitive) memory or Heap(non-primitive) memory

let myYoutubename = "rahul yadav"

let anothername = myYoutubename

anothername = "aakash"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "rahul@gmail.com",
    id: 1234
}

let userTwo = userOne

userTwo.email = "yadav@google.com"
console.log(userOne.email);
console.log(userTwo.email);
 
