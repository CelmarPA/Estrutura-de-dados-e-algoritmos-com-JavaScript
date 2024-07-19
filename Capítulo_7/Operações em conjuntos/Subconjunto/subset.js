import { Set } from "../../Sets/Usando a classe Set/set.js";
class Subset extends Set {
    constructor() {
        super();
    }

    // Subconjunto: confirma se um dado conjunto é um subconjunto de outro.
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)) {
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
    }
}

const setA = new Subset();
setA.add(1);
setA.add(2);
const setB = new Subset();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Subset();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));
