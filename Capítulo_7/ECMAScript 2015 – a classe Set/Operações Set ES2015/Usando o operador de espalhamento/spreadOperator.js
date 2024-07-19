// Usaremos os dois conjuntos a seguir em nossos exemplos:
const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4)

// Union
console.log(new Set([...setA], [...setB]));

// Intersection
console.log(new Set([...setA].filter(x => setB.has(x))));

// Diferença
console.log(new Set([...setA].filter(x => !setB.has(x))));