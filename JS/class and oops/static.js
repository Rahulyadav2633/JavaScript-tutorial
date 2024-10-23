class user{
    constructor(username){
        this.username = username;

    }
    logME(){
        console.log(`${this.username}`);
    }

     static createId(){
        return `123`;
    }
}

const Rahul  = new user('yadav')
console.log(Rahul.logME());
console.log(Rahul.createId());