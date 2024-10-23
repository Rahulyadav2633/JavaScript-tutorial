// class user{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;

//     }

//     encryptPassword(){
//         return`${this.username}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user('Rahul','rahul@gmail.com','123');
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//  behind the scene
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.username}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const coffee = new User('yadav','yadav@gmail.com','123');
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());