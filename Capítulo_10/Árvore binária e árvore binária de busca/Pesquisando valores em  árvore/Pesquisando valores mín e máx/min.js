import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // min(): esse método devolve a chave/valor mínimo da árvore.
    min() {
        return this.minNode(this.root);
    }

    // Método auxiliar minNode(node):
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left
        }
        return current
    }
}
