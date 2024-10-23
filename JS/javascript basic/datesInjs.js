// // Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// // let myCreatedDate = new Date(2024,2,15)
let myCreatedDate1 = new Date("2024-02-15");
// // console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getHours());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()}and the time`

newDate.toLocaleString('default',{
    weekday:'long',
    calendar:'gregpry'
})