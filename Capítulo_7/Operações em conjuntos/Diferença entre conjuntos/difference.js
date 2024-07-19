import { Set } from "../../Sets/Usando a classe Set/set.js";
class SetDifference extends Set {
    constructor() {
        super();
    }

    // Diferença: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo.
    difference(otherSet) {
        const differenceSet = new Set();
        this.values().forEach((value) => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
}

const setA = new SetDifference();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new SetDifference();
setB.add(2);
setB.add(3);
setB.add(4);
const differenceAB = setA.difference(setB);
const differenceBA = setB.difference(setA);
console.log(differenceAB.values()); // [ 1 ]
console.log(differenceBA.values()); // [ 4 ]
