// Usaremos os dois conjuntos a seguir em nossos exemplos:
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const intersection = (set1, set2) => {
    const intersectionSet = new Set();
    set1.forEach(value => {
        if (set2.has(value)) {
            intersectionSet.add(value);
        }
    });
    return intersectionSet;
};
console.log(intersection(setA, setB)); // Set(2) { 2, 3 }
