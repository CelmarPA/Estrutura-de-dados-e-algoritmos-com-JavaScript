// Usaremos os dois conjuntos a seguir em nossos exemplos:
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4)

const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach(value => {
        if (!set2.has(value)) {
            differenceSet.add(value);
        }
    });
    return differenceSet;
}
console.log(difference(setA, setB)); // Set(1) { 1 }

