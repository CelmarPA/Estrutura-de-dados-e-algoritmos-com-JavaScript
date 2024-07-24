const map = new Map();
map.set("Gandalf", "gandalf@email.com");
map.set("John", "johnsnow@email.com");
map.set("Tyrion", "tyrion@email.com");
console.log(map.has("Gandalf")); // true
console.log(map.size); // 3
console.log(map.keys()); // [Map Iterator] { 'Gandalf', 'John', 'Tyrion' }
console.log(map.values()); // [Map Iterator] {'gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com'}
console.log(map.get('Tyrion')); // tyrion@email.com
map.delete('John');
console.log(map.size); // 2
map.clear()
console.log(map.size); // 0