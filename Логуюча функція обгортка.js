function logger(callback) {
  return function(...args) {
    console.log("Function:", callback.name);
    console.log("Args:", args);
    console.log("Time:", new Date().toLocaleTimeString());
    return callback(...args);
  };
}

function sum(a, b) { return a + b; }

const loggedSum = logger(sum);
console.log(loggedSum(5, 7));
