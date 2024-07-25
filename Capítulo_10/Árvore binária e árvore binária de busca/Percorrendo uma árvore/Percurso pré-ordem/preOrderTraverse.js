import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // preOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order).
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback);
    }

    // Método auxiliar preOrderTraverseNode
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
}

const printNode = (value) => console.log(value);
tree.preOrderTraverse(printNode);
