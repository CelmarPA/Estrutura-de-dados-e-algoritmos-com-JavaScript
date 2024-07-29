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

    // Método fixTreeProperties
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.color.isRed() && node.color != Colors.BLACK) {
            let parent = node.parent;
            const grandParent = parent.parent;
            // Caso A: o pai é o filho a esquerda
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;
                // caso 1A: o tio do nó também é vermelho – basta recolorir
                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    // caso 2A: o nó é o filho à direita – rotação à esquerda
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // caso 3A: o nó é o filho à esquerda – rotação à direita
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;

                }
            } else {
                // caso B: o pai é o filho à direita
                const uncle = grandParent.left;
                // caso 1B: o tio é vermelho – basta recolorir
                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    // caso 2B: o nó é o filho à esquerda – rotação à direita
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    // caso 3B: o nó é o filho à direita – rotação à esquerda
                    this.rotationRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            }
        }
        this.root.color = Colors.BLACK;
    }
}
