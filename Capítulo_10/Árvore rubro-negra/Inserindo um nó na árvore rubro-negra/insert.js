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

    // Método insert
    insert(key) {
        if (this.root == null) {
            this.root = new RedBlackNode(key);
            this.root.color = Colors.BLACK;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }

    // Método insertNode
    insertNode(node, key) {
        if (this.compareFn(key,  node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }
        } else if (node.rigth == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        } else {
            return this.insertNode(node.right, key);
        }
    }
}
