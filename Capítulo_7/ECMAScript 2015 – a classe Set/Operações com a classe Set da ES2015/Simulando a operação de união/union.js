// Usaremos os dois conjuntos a seguir em nossos exemplos:
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (set1, set2) => {
    const unionAb = new Set();
    set1.forEach(value => unionAb.add(value));
    set2.forEach(value => unionAb.add(value));
    return unionAb;
}

console.log(union(setA, setB)); // Set(4) { 1, 2, 3, 4 }