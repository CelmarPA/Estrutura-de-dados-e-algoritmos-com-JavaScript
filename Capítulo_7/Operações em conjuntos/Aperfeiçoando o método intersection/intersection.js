import { Set } from "../../Sets/Usando a classe Set/set.js";
class SetIntersection extends Set {
    constructor() {
        super();
    }
    // Intersecção: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos.
    intersection(otherSet) {
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if ( otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
}

const setA = new SetIntersection();
setA.add(1);
setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);
setA.add(6);
setA.add(7);
console.log(setA.values()); // [1, 2, 3, 4, 5, 6, 7]

const setB = new SetIntersection();
setB.add(4);
setB.add(6);
console.log(setB.values()); // [ 4, 6 ]

const intersectionAB = setA.intersection(setB);
const intersectionBA = setB.intersection(setA);
console.log(intersectionAB.values()); // [ 4, 6 ]

