function createChecker(array) {
  return function(value) {
    return array.includes(value);
  };
}

const check = createChecker(["apple", "banana", "orange"]);
console.log(check("banana")); 
console.log(check("carrot")); 
