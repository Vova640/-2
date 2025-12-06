function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
console.log(add5(10)); 

console.log(makeAdder(7)(3)); 
