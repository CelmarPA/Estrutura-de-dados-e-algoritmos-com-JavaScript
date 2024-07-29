import BinarySearchTree from "../../Árvore binária e árvore binária de busca/Usando a classe binarySearchTree/binarySearchTree";
import { defaultCompare, Compare, Colors } from "../../models/util.js";
import { RedBlackNode } from "../../models/node.js";

// Classe RedBlackTree
class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
}
