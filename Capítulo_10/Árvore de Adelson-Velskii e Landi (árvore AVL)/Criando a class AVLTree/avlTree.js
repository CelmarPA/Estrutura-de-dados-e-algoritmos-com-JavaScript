import BinarySearchTree from "../../../Capítulo_10/Árvore binária e árvore binária de busca/Usando a classe binarySearchTree/binarySearchTree.js";
import { defaultCompare, BalanceFactor, Compare } from "../../models/util.js";
import { Node } from "../../models/node.js";

// Classe AVLTree
class AVLTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
}
