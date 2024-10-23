const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
//  console.log(descripter);

const coffee = {
  name: "StarBucks",
  price: 500,
  description: "Best coffee in the world",
  orderCoffee: function () {
    console.log("Coffee is not ready");
  },
};

//  console.log(coffee);
console.log(coffee.name);
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

// Object.defineProperty(coffee,'name',{
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(coffee, 'name'));

for (const [key, value] of Object.entries(coffee)) {
  if (typeof value !== "function") {
    console.log(key, value);
  }
}
