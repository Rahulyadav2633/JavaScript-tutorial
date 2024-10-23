// singleton
// object.create

// objects literals
const mySym = Symbol("key1")
const JsUser = {
    myself : "I am Rahul",
    "full name": "Rahul Yadav",
    age:22,
    [mySym]:"mykey1",
    height:"5.10 inch",
    location: "sohna",
    isloggedIn: true
}
// console.log(JsUser);
// console.log(JsUser["height"]);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.location = "Gurugram"
// Object.freeze(JsUser)
JsUser.location = "Haryana"
// console.log(JsUser)

JsUser.greetings = function(){
    // console.log("Hello everyone");

}
// console.log(JsUser.greetings());
JsUser.greetingsTwo = function(){
    // console.log(`Hello everyone,${this.myself}`);

}
// console.log(JsUser.greetingsTwo());

// let age  = 32;
// age = age+1;
// console.log(age);
let x = 0x21;
// console.log(x);

const object1 = { a:1,b:2};
const object2 = { m:2, c:3 };
 
const returnedObject = Object.assign(object1,object2);

// console.log(object1);

// console.log(Object.keys(JsUser));
// console.log(Object.values(JsUser));

// console.log(Object.entries(JsUser));
 

const twitterUser =  new Object() // singleton object
const twitterUser1 = {}; // non singleton object

twitterUser1.id = "123abc"
twitterUser1.name = "Rahul"
twitterUser1.age = "21"

//  console.log(twitterUser1);

const regularUser = {
    email: "rahul@gmail.com",
    password:"123444",
    fullname: {
        userFullname:{
        firstname:"Rahul",
        lastname:"yadav"

    }
}
}
// console.log(regularUser.fullname.userFullname);         


const course = {
    coursename:"web development",
    courseprice:"2000",
    courseInstructor:"Hitesh"

}

// course.courseInstructor
// console.log(courseInstructor);

const {courseInstructor:instructor} = course;    //destructuring assigment
// console.log(courseInstructor);
console.log(instructor);

// {
//    " coursename":"web development",
//     "courseprice":"2000",
//     "courseInstructor":"Hitesh"

// }

'https://randomuser.me/api/'
