function values(f, low, high) {
  const result = [];
  for (let i = low; i <= high; i++) {
    result.push(f(i));
  }
  return result;
}

console.log(values(x => x * 2, 1, 5)); 
