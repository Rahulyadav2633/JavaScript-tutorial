const arr = [1,2,3,4,5,6];
for(const num of arr){
    console.log(num);
}

const greetings = "Hello world "
for(const char of greetings){ 
    if(char == ' '){
        console.log("space is detected");
        break;
    }
    console.log(char);
}

// MAP
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "Sohna");
map.set("state", "Haryana");
console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject = {
    "name": "John",
    "age": 33 ,
}
for (const [key,value] of myObject){
    console.log(key,':-',value);
}