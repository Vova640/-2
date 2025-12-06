const capitalizeProp = (arr, prop) =>
  arr.map(obj => ({
    ...obj,
    [prop]: obj[prop].charAt(0).toUpperCase() + obj[prop].slice(1)
  }));

const users = [
  { name: "john", age: 20 },
  { name: "alice", age: 22 }
];

console.log(capitalizeProp(users, "name"));
