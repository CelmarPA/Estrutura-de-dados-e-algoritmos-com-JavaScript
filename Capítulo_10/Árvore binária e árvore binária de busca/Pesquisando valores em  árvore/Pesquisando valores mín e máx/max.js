import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // max(): esse método devolve a chave/valor máximo da árvore.
    max() {
        return this.maxNode(this.root)
    }

    // Método auxiliar maxNode(node):
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
}