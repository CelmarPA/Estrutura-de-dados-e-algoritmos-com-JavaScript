import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // inOrderTraverse(): esse método visita todos os nós da árvore usando um percurso em-ordem (in-order).
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    // Método auxiliar inOrderTraverseNode(node, callback):
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
}

const printNode = (value) => console.log(value);
tree.inOrderTraverse(printNode);
