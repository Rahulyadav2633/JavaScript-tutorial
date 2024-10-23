class user {
  constructor(username) {
    this.username = username;
  }

  logME() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends user {
  constructor(username, subject, password) {
    super(username);
    this.subject = subject;
    this.password = password;
  }

  addCourse() {
    console.log(`Course added for ${this.subject} by ${this.username}`);
  }
}

const chai = new Teacher("Rahul", "Maths", "abc");
chai.addCourse();

console.log(chai instanceof Teacher);
