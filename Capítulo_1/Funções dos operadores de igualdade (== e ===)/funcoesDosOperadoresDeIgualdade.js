console.log("packt" ? true : false); // true
console.log("packt" == true); // false
console.log("packt" == false); // false

console.log("packt" === true); // false
console.log("packt" === "packt"); // true

var person1 = { name: "John" };
var person2 = { name: "John" };
console.log(person1 === person2); // false, objetos diferentes
