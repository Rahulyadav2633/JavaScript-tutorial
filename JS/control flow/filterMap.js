const coding = ["java", "python", "javascript", "Golang"];

const values = coding.forEach((item) => {
//   console.log(item);
});

// console.log(values);

const myNums = [1,2,3,4,5,6,7,9,10]

// const newNums = myNums.filter((num) => {
    // return num > 6;
// })

const newNums = []
myNums.forEach((num) => {
    if(num > 7){
        newNums.push(num);
    }
})
// console.log(newNums);

const myBooks = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year:1999},
    {title: "History", author: "F. Scott Fitzgerald", year:2000},
    {title: "Science", author: "F. Scott Fitzgerald", year:2011},
    {title: "Social Science", author: "F. Scott Fitzgerald", year:2020},
    {title: "Mathematices", author: "F. Scott Fitzgerald", year:2024},
    {title: "History", author: "F. Scott Fitzgerald", year:2023}
];

const myNewBooks = myBooks.filter((bk) => {
    return bk.title === 'History'})
// console.log(myNewBooks);


const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const myNewNumbers = myNumbers.map((num) => num ** 10)
//  console.log(myNewNumbers);

const myNum = [1,2,3]

const myTotal = myNum.reduce( function (accumalator,currentValue) { 
    console.log(`accumaltor:${accumalator},currentValue:${currentValue}`);
    return accumalator+currentValue
},0)

console.log(myTotal);