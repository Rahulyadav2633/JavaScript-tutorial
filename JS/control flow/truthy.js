const userEmail = []
if(userEmail){
    console.log("got a correct email");

}else{
    console.log("don't have a correct email");
}

// falsy value = null,undefined,"",BigInt 0n,false,0,-0,NaN
// truthy vlaue = [],"0",'false'," ",{},function(){} 

if(userEmail.length  === 0){
  console.log("array is empty");
}

const emptyObject  = {};

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty"); 
}
 
// nullish Coalescing operator(??)

let val1;
val1 = 5 ?? 10;
// val2 = null ?? 10;
val3 = undefined ?? 10;
console.log(val3);

// Ternary operator

const coldCoffeePrice = 400;
const hotCoffeePrice = 200;
coldCoffeePrice || hotCoffeePrice <= 300 ? console.log("it is affordable") : console.log("it is not affordable");



