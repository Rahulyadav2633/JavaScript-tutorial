// let a = 10
// const b = 30
// var c = 40

let a = 300

if(true){
    let a = 10
   const b = 30
//    console.log("inner:", a);

}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rahul";

    function two(){
        const fullname = `myself ${username}`
        console.log(fullname);
    }
    // two()
}
// one()

if (true){
    const username  = "rahul";
    if(username == "rahul"){
        const website = " youtube"
        console.log(username + website );

    }
    // console.log(website);
}
// console.log(username);