import { Compare, defaultCompare } from "../../models/util.js";
import { Node } from "../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }
}
