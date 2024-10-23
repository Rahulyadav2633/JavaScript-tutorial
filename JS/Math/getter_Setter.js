class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password.toUpperCase()}rahul`;
  }

  set password(value){
    this._password = value 
 }
}

const Rahul = new User("rahul@123", "1abc");
console.log(Rahul.password);
