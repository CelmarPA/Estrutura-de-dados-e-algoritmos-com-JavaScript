const set = new Set();
set.add(1);
console.log(set.values()); // @Iterator [Set Iterator] { 1 }
console.log(set.has(1)); // true
console.log(set.size); // 1
set.delete(1);
console.log(set.size); // 0