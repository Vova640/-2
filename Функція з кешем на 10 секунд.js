function cache10seconds(callback) {
  let lastArgs = null;
  let lastResult = null;
  let lastTime = 0;

  return function(...args) {
    const now = Date.now();

    if (lastArgs &&
        JSON.stringify(lastArgs) === JSON.stringify(args) &&
        now - lastTime < 10000) {
      return lastResult; 
    }

    lastArgs = args;
    lastTime = now;
    lastResult = callback(...args);
    return lastResult;
  };
}

const slowCalc = x => x * 2;
const cachedCalc = cache10seconds(slowCalc);

console.log(cachedCalc(10)); 
console.log(cachedCalc(10)); 
