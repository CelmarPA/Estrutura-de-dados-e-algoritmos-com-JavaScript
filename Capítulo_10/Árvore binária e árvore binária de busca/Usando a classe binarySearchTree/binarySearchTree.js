import { Compare, defaultCompare } from "../../models/util.js";
import { Node } from "../../models/node.js";

// Classe BinarySearchTree
export default class BinarySearchTree {
    #root;
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn; // usado para comparar os valores dos nós
        this.#root = null; // nó raiz do tipo Node
    }

    // Método getter para #root:
    _getRoot() {
        return this.#root;
    }

    // Método setter para #root:
    _setRoot(key) {
        this.#root = key;
    }

    // insert(key): esse método insere uma nova chave na árvore.
    insert(key) {
        if (this._getRoot() == null) {
            this._setRoot(new Node(key));
        } else {
            this.insertNode(this._getRoot(), key);
        }
    }

    // Método auxiliar insertNode(node, key):
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new Node(key);
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(key);
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    // inOrderTraverse(): esse método visita todos os nós da árvore usando um percurso em-ordem (in-order).
    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this._getRoot(), callback);
    }

    // Método auxiliar inOrderTraverseNode(node, callback):
    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // preOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order).
    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this._getRoot(), callback);
    }

    // Método auxiliar preOrderTraverseNode
    preOrderTraverseNode(node, callback) {
        if (node != null) {
            callback(node.key);
            this.inOrderTraverseNode(node.left, callback);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    // postOrderTraverse(): esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order).
    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this._getRoot(), callback);
    }

    // Método auxiliar postOrderTraverseNode:
    postOrderTraverseNode(node, callback) {
        if (node != null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    // min(): esse método devolve a chave/valor mínimo da árvore.
    min() {
        return this.minNode(this._getRoot());
    }

    // Método auxiliar minNode(node):
    minNode(node) {
        let current = node;
        while (current != null && current.left != null) {
            current = current.left;
        }
        return current;
    }

    // max(): esse método devolve a chave/valor máximo da árvore.
    max() {
        return this.maxNode(this._getRoot());
    }

    // Método auxiliar maxNode(node):
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }

    // search(key): esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir.
    search(key) {
        return this.searchNode(this._getRoot(), key);
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

    // remove(key): esse método remove a chave da árvore.
    remove(key) {
        this._setRoot(this.removeNode(this._getRoot(), key))
    }

    // Método auxiliar removeNode(node, key):
    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (this.compareFn(key,  node.key) === Compare.LESS_THAN) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if ( this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.removeNode(node.right,  key);
            return node;
        } else {
            // key é igual a node.item
            // lida com 3 condições especiais
            // 1 - um nó folha
            // 2 - um nó com apenas 1 filho
            // 3 - um nó com 2 filhos

            // caso 1
            if (node.left == null && node.right == null) {
                node = null;
                return node;
            }

            // caso 2
            if (node.left == null) {
                node = node.right;
                return node;
            } else if (node.right == null) {
                node = node.left;
                return node;
            }

            // caso 3
            const aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right,aux.key);
            return node;
        }
    }
}

// // Criação da Árvore:
// const tree = new BinarySearchTree();

// // Exemplos para método insert:
// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(9);
// tree.insert(8);
// tree.insert(10);
// tree.insert(13);
// tree.insert(12);
// tree.insert(14);
// tree.insert(20);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);

// // Exemplos para os método de varredura:
// const printNode = (value) => console.log(value);
// tree.inOrderTraverse(printNode); // Imprime os valores em ordem crescente
// tree.preOrderTraverse(printNode); // Imprime os valores na ordem pré-ordem
// tree.postOrderTraverse(printNode); // Imprime os valores na ordem pós-ordem

// // Exemplos dos método de pesquisa
// console.log(tree.min().key); // 3
// console.log(tree.max().key); // 25

// console.log(tree.search(1) ? "Key 1 found." : "Key 1 not found."); // Key 1 not found.
// console.log(tree.search(8) ? "Key 8 found." : "Key 8 not found."); // Key 8 found.

// tree.remove(6); // Remove a chave 6 da árvore
// tree.remove(15); // Remove a chave 15 da árvore
// tree.inOrderTraverse(printNode); // Imprime os valores em ordem crescente após a remoção
