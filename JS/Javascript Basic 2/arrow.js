const user = {
    username: "rahul",
    price: 230,
     
    welcomeMessage:function(){
        // console.log(`${this.username},welcome to my official website`)
        // console.log(this);
    }
}
// this keyword give current context
user.welcomeMessage()
user.username = "sam";
user.welcomeMessage()

// console.log(this);

// function show(){
//     // console.log(this);
// }
// // show()

// const show = function (){
//     let username = "rahul"
//     console.log(this.username);
// }

// show()

const show = () => {
    let username = "rahul"
    console.log(this);
}
// show()

const addTwo = (num1,num2) => {
    return num1+num2;
}
// console.log(addTwo(5,6));
const addThree = (num1,num2,num3) => (num1+num2+num3)
// console.log(addThree(2,3,4));
const f = (num1,num2,num3) => ({username:"rahul"})
console.log(f());