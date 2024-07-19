import { Set } from "../../Sets/Usando a classe Set/set.js";
class SetIntersection extends Set {
    constructor() {
        super();
    }
    // Intersecção: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos.
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    }
}

const setA = new SetIntersection();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values()); // [1, 2, 3]

const setB = new SetIntersection();
setB.add(2);
setB.add(3);
setB.add(4);
console.log(setB.values()); // [2, 3, 4]

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values()); // [ 2, 3 ]