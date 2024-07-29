import BinarySearchTree from "../../Árvore binária e árvore binária de busca/Usando a classe binarySearchTree/binarySearchTree";
import { defaultCompare, BalanceFactor, Compare, Colors } from "../../models/util.js";
import { RedBlackNode } from "../../models/node.js";

// Classe RedBlackTree
class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    // Método rotationRR
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        if (tmp.left && tbm.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
}
