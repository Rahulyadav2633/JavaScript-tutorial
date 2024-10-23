// const user = {
//     username: "Rahul",
//     loginCount: 8,
//     signedIn: true,

    // getUserDetails: function(){
        // console.log("Got user information");
        // console.log(`Username:${this.username}`);
        // console.log(this);
        
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
 function User(username,isLoggdIn,loginCount){
    this.username = username;
    this.isLoggdIn = isLoggdIn;
    this.loginCount = loginCount;

    // this.greet = function(){
    //     console.log(`Hello ${this.username}`);

    // }x`x
    
    return this;
 };

 const userOne = new User("Rahul",true,8);
 const userTwo = new User("Yadav",false,12);
 console.log(userOne.constructor);
  

//  console.log(userOne);
 
