function average(...args) {
  if (args.length === 0) return 0;
  return args.reduce((sum, x) => sum + x, 0) / args.length;
}

console.log(average(10, 20, 30)); 
