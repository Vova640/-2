function callWithContext(obj, callback) {
  callback.call(obj);
}

const person = {
  name: "Volodymyr",
  age: 20
};

callWithContext(person, function () {
  const date = new Date().toLocaleDateString();
  console.log(`Today is ${date}! Happy birthday ${this.name}.`);
});
