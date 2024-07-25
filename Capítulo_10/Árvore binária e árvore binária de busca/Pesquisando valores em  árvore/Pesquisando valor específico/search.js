import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js";

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // search(key): esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir.
    search(key) {
        return this.searchNode(this.root, key);
    }

    // Método auxiliar searchNode(node, key):
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            return this.searchNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }
}

console.log(tree.search(1) ? "Key 1 found." : "Key 1 not found.");
console.log(tree.search(8) ? "Key 8 found." : "Key 8 not found.");
