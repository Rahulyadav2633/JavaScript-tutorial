const myObject = {
  name: "John",
  age: 30,
  occupation: "Developer",
  address: {
    location: "Gurugram",
    pincode: 122001,
    country: "India",
  },
};

for (const key in myObject) {
  console.log(myObject[key]);0
  if (typeof myObject[key] === "object" && !Array.isArray(myObject[key])) {
    for (const nestedKey in myObject[key]) {
      console.log(`  ${nestedKey}`);
    }
  }
}

const programming = ["js", "py", "java"];
for (const key in programming) {
  console.log(key);
}
