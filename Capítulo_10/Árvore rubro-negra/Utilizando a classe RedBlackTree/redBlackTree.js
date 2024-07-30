import BinarySearchTree from "../../Árvore binária e árvore binária de busca/Usando a classe binarySearchTree/binarySearchTree.js";
import { defaultCompare, Compare } from "../../models/util.js";
import { RedBlackNode, Colors } from "../../models/node.js";

// Classe RedBlackTree
class RedBlackTree extends BinarySearchTree {
    #root;
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.#root = null;
    }

    // Método getter para #root:
    _getRoot() {
        return this.#root;
    }

    // Método setter para #root:
    _setRoot(key) {
        this.#root = key;
    }

    // Método insert
    insert(key) {
        if (this._getRoot() == null) {
            this._setRoot(new RedBlackNode(key));
            this._getRoot().color = Colors.BLACK;
        } else {
            const newNode = this.insertNode(this._getRoot(), key);
            this.fixTreeProperties(newNode);
        }
    }

    // Método insertNode
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }
        } else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        } else {
            return this.insertNode(node.right, key);
        }
    }

    // Método rotationLL

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
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this._setRoot(tmp);
        } else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }

    // Método rotationRR

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
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this._setRoot(tmp);
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

    // Método fixTreeProperties
    fixTreeProperties(node) {
        while (node && node.parent && node.parent.color === Colors.RED && node.color != Colors.BLACK) {
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
        this._getRoot().color = Colors.BLACK;
    }
}

// Suponha que as classes e enums foram importados corretamente
const tree = new RedBlackTree();

// Inserir elementos na árvore
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(15);
tree.insert(5);

// A árvore agora deve ter esses elementos e estar balanceada

// Método para percurso em ordem
function inOrderTraversal(node, result = []) {
    if (node) {
        inOrderTraversal(node.left, result);
        result.push({ key: node.key, color: node.color });
        inOrderTraversal(node.right, result);
    }
    return result;
}

// Exibir a árvore em ordem
const result = inOrderTraversal(tree._getRoot());
console.log(result);

// Criar a árvore Red-Black
const rbTree = new RedBlackTree();

// Inserir alguns elementos
rbTree.insert(50);
rbTree.insert(30);
rbTree.insert(70);
rbTree.insert(20);
rbTree.insert(40);
rbTree.insert(60);
rbTree.insert(80);

// Verificar a estrutura da árvore
console.log('Árvore Red-Black após inserções:');
console.log(inOrderTraversal(rbTree._getRoot()));

// Método de busca
function search(node, key) {
    if (node === null || node.key === key) {
        return node;
    }
    if (key < node.key) {
        return search(node.left, key);
    }
    return search(node.right, key);
}

// Buscar um elemento
const searchResult = search(rbTree._getRoot(), 60);
console.log(searchResult ? `Elemento encontrado: ${searchResult.key}` : 'Elemento não encontrado');
