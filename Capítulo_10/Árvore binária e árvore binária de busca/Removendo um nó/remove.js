import { Compare, defaultCompare } from "../../../models/util.js";
import { Node } from "../../../models/node.js"

export default class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.root = null; // nó raiz do tipo Node
    }

    // remove(key): esse método remove a chave da árvore.
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }

    // Método auxiliar removeNode(node, key):
    removeNode(node, key) {
        if (node == null) { 
            return null;
        }
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left,  key);
            return node;
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            // key é igual a node.item
            // lida com 3 condições especiais
            // 1 - um nó folha
            // 2 - um nó com apenas 1 filho
            // 3 - um nó com 2 filhos

            // Caso 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }

            // Caso 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            // Caso 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;

        }
    }

}
