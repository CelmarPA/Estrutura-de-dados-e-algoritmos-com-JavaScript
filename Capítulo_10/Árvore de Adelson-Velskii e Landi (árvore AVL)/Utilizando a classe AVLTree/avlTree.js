import BinarySearchTree from "../../../Capítulo_10/Árvore binária e árvore binária de busca/Usando a classe binarySearchTree/binarySearchTree.js";
import { defaultCompare, BalanceFactor, Compare } from "../../models/util.js";
import { Node } from "../../models/node.js";

export class AVLTree extends BinarySearchTree {
    #root;
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.#root = null;
    }

    // Método getter para #root
    _getRoot() {
        return this.#root;
    }

    // Método setter para #root
    _setRoot(key) {
        this.#root = key;
    }

    // Método getNodeHeight código para calcular a altura de um nó:
    getNodeHeight(node) {
        if (node == null) {
            return -1;
        }
        return (
            Math.max(
                this.getNodeHeight(node.left),
                this.getNodeHeight(node.right)
            ) + 1
        );
    }

    // Método getBalanceFactor, calcula o fator de balanceamento de um nó e devolve o seu estado:
    getBalanceFactor(node) {
        const heigthDifference =
            this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heigthDifference) {
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    // Método rotationLL, rotação simples à direita:

   /**
   * Left left case: rotate right
   *
   *       b                           a
   *      / \                         / \
   *     a   e -> rotationLL(b) ->   c   b
   *    / \                             / \
   *   c   d                           d   e
   *
   * @param node Node<T>
   */
    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }

    // Método rotationRR, rotação simples à esquerda:

    /**
    * Right right case: rotate left
    *
    *     a                              b
    *    / \                            / \
    *   c   b   -> rotationRR(a) ->    a   e
    *      / \                        / \
    *     d   e                      c   d
    *
    * @param node Node<T>
    */
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }

    // Método rotationRL, rotação dupla à direita:

    /**
    * Right left case: rotate right then left
    * @param node Node<T>
    */
    rotationRL(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }

    // Método rotationLR, rotação dupla à esquerda:

    /**
    * Left right case: rotate left then right
    * @param node Node<T>
    */
    rotationLR(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    // Método insert
    insert(key) {
        this._setRoot(this.insertNode(this._getRoot(), key));
    }

    // Método insertNode
    insertNode(node, key) {
        // insere o nó como em uma BST
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // chave duplicada
        }

        // balanceia a árvore, se for necessário
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }
        return node;
    }

    // Método removeNode
    removeNode(node, key) {
        node = super.removeNode(node, key);
        if (node == null) {
            return node; // null, não é necessário balancear
        }

        // verifica se a árvore está balanceada
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
            const balanceFactorLeft = this.getBalanceFactor(node.left);
            if (
                balanceFactorLeft === BalanceFactor.BALANCED ||
                balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
            ) {
                return this.rotationLL(node);
            }
            if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
                return this.rotationLR(node.left);
            }
        }
        if (balanceFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
            const balanceFactorRight = this.getBalanceFactor(node.right);
            if (
                balanceFactorRight === BalanceFactor.BALANCED ||
                balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
            ) {
                return this.rotationRR(node);
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
                return this.rotationRL(node.right);
            }
        }
        return node;
    }
}

// Criando uma nova árvore AVL
const avlTree = new AVLTree();

// Inserindo nós na árvore
avlTree.insert(15);
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(5);
avlTree.insert(12);
avlTree.insert(25);
avlTree.insert(3);

// A árvore está balanceada após cada inserção
console.log(avlTree._getRoot());


// Removendo nós da árvore
avlTree.remove(10);
avlTree.remove(25);
avlTree.remove(3);

// A árvore é balanceada após cada remoção
console.log(avlTree._getRoot());
