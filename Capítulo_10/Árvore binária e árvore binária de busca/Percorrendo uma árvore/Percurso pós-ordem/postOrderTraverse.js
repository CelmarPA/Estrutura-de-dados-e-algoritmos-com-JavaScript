import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // postOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order).
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    // Método auxiliar postOrderTraverseNode:
    postOrderTraverseNode(node, callback) {
        if(node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
}

const printNode = (value) => console.log(value);
tree.postOrderTraverse(printNode);
