// immediatley invoked function expressions (IIFE)
(function coffee() {
  // named IIFE
  console.log(`DB is connected`);
})();

((name) => {
  console.log(`DB is connected ${name}`);
})("rahul");
