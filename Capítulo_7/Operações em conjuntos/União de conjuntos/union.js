import { Set } from "../../Sets/Usando a classe Set/set.js";
class SetUnion extends Set {
    constructor() {
        super();
    }

    // União: dados dois conjuntos, devolve um novo conjunto com elementos dos dois conjuntos especificados.
    union(otherSet) {
        const unionSet = new Set();
        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));
        return unionSet;
    }

    union2(otherSet) {
        const unionSet = new Set();
        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    }
}

const setA = new SetUnion();
setA.add(1);
setA.add(2);
setA.add(3);
console.log(setA.values()); // [ 1, 2, 3 ]

const setB = new SetUnion();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);
console.log(setB.values()); // [ 3, 4, 5, 6 ]

const unionAB = setA.union(setB);
console.log(unionAB.values()); // [ 1, 2, 3, 4, 5, 6 ]
