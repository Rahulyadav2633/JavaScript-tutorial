const promiseOne = new Promise(function (resolve, reject) {
  // DB calls
  // cryptography
  // Networking
  // etc
  setTimeout(function () {
    console.log("async is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async tast2 completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "RAHUL YADAV", email: "rahul@gmail.com" });
  });
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Rahul", email: "exmaple@gmail.com" });
    } else {
      reject("Error");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise either resolved or rjected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Rao", email: "yadav@gmail.com" });
    } else {
      reject("Error:js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

async function getAllUsers() {
  try {
    const response = await fetch(
      "https://api.github.com/users/hiteshchoudhary"
    );

    
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("e:", error);
  }
}

getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => response.json())
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error)
)


let promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
      resolve("Operation successful");
  } else {
      reject("Operation failed");
  }
});

promise.then((result) => {
  console.log(result);  // Output: "Operation successful"
}).catch((error) => {
  console.error(error);
});

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
