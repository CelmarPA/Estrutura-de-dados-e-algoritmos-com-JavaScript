# Compare elemets
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1
}

# Função default_compare
def default_compare(a, b):
    if (a == b):
        return 0
    
    return Compare["LESS_THAN"] if a < b else Compare["BIGGER_THAN"]

# balance_factor
balance_factor = {
    "UNBALANCED_RIGHT": 1,
    "SLIGHTLY_UNBALANCED_RIGHT": 2,
    "BALANCED": 3,
    "SLIGHTLY_UNBALANCED_LEFT": 4,
    "UNBALANCED_LEFT": 5
}

# Classe Node
class Node:
    def __init__(self, key):
        self.key = key # valor do nó
        self.left = None # refêrencia ao nó filho à esquerda
        self.right = None # refêrencia ao nó filho à esquerda

# Colors
from enum import Enum

class Colors(Enum):
    RED = 0
    BLACK = 1

# Classe RedBlackNode
class RedBlackNode(Node):
    def __init__(self, key):
        super().__init__(key)
        self.key = key
        self.color = Colors.RED
        self.parent = None

    def isRed(self):
        return self.color == Colors.RED

# Classe BinarySearchTree
class BinarySearchTree:
    def __init__(self, compare_fn = default_compare):
        self.compare_fn = compare_fn
        self.__root = None

    # Método getter para __root:
    def get_root(self):
        return self.__root
        
    # Método setter para __root:
    def set_root(self, key):
        self.__root = key

    # insert(key): esse método insere uma nova chave na árvore.
    def insert(self, key):
        root = self.get_root()
        if root is None:
            self.set_root(Node(key))
        else:
            self.insert_node(root, key)
    
    # Método auxiliar insert_node(node, key):
    def insert_node(self, node, key):
        if self.compare_fn(key, node.key) == Compare["LESS_THAN"]:
            if node.left is None:
                node.left = Node(key)
            else:
                self.insert_node(node.left,key)
        else:
            if node.right is None:
                node.right = Node(key)
            else:
                self.insert_node(node.right, key)

    # in_order_traverse(): esse método visita todos os nós da árvore usando um percurso em-ordem (in-order).
    def in_order_traverse(self, callback):
        self.in_order_traverse_node(self.get_root(), callback)

    # Método auxiliar in_order_traverse_node(node, callback):
    def in_order_traverse_node(self, node, callback):
        if node is not None:
            self.in_order_traverse_node(node.left, callback)
            callback(node.key)
            self.in_order_traverse_node(node.right, callback)

    # pre_order_traverse(): esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order).
    def pre_order_traverse(self, callback):
        self.pre_order_traverse_node(self.get_root(), callback)
    
    # Método auxiliar pre_order_traverse_node
    def pre_order_traverse_node(self, node, callback):
        if node is not None:
            callback(node.key)
            self.pre_order_traverse_node(node.left, callback)
            self.pre_order_traverse_node(node.right, callback)

    # post_order_traverse(): esse método visita todos os nós da árvore usando um percurso pós-ordem (post-order).
    def post_order_traverse(self, callback):
        self.post_order_traverse_node(self.get_root(), callback)

    # Método auxiliar post_order_traverse_node:
    def post_order_traverse_node(self, node, callback):
        if node is not None:
            self.post_order_traverse_node(node.left, callback)
            self.post_order_traverse_node(node.right, callback)
            callback(node.key)

    # min(): esse método devolve a chave/valor mínimo da árvore.
    def min(self):
        return self.min_node(self.get_root())
    
    # Método auxiliar min_node(node):
    def min_node(self, node):
        current = node
        while current and current.left is not None:
            current = current.left
        return current
    
    # max(): esse método devolve a chave/valor máximo da árvore.
    def max(self):
        return self.max_node(self.get_root())
    # Método auxiliar max_node(node):
    def max_node(self, node):
        current = node
        while current and current.right is not None:
            current = current.right
        return current 

    # search(key): esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir.
    def search(self, key):
        return self.search_node(self.get_root(), key)
    
    # Método auxiliar search_node(node, key):
    def search_node(self, node, key):
        if node is None:
            return False
        if self.compare_fn(key, node.key) == Compare["LESS_THAN"]:
            return self.search_node(node.left, key)
        elif self.compare_fn(key, node.key) == Compare["BIGGER_THAN"]:
            return self.search_node(node.right,key)
        else:
            return True

    # remove(key): esse método remove a chave da árvore.
    def remove(self, key):
        self.root = self.remove_node(self.get_root(), key)

    # Método auxiliar remove_node(node, key):
    def remove_node(self, node, key):
        if node is None:
            return None
        if self.compare_fn(key, node.key) == Compare["LESS_THAN"]:
            node.left = self.remove_node(node.left, key)
            return node
        elif self.compare_fn(key, node.key) == Compare["BIGGER_THAN"]:
            node.right = self.remove_node(node.right, key)
            return node
        else:
            # key é igual a node.item
            # lida com 3 condições especiais
            # 1 - um nó folha
            # 2 - um nó com apenas 1 filho
            # 3 - um nó com 2 filhos

            # Caso 1
            if node.left and node.right is None:
                node = None
                return node
            
            # Caso 2
            if node.left is None:
                node = node.right
                return node
            elif node.right is None:
                node = node.left
                return node
            
            # Caso 3
            aux = self.min_node(node.right)
            node.key = aux.key
            node.rigth = self.remove_node(node.right, aux.key)
            return node

# Classe RedBlackTree
class RedBlackTree(BinarySearchTree):
    def __init__(self, compare_fn = default_compare):
        super().__init__(compare_fn)
        self.compare_fn = compare_fn
        self.__root = None

    # Método getter para __root:
    def get_root(self):
        return self.__root

    # Método setter para __root:
    def set_root(self, key):
        self.__root = key

    # Método insert
    def insert(self, key):
        if self.get_root() is None:
            self.set_root(RedBlackNode(key))
            self.get_root().color = Colors.BLACK
        else:
            new_node = self.insert_node(self.get_root(), key)
            self.fix_tree_properties(new_node)

    # Método insert_node
    def insert_node(self, node, key):
        if self.compare_fn(key, node.key) == Compare["LESS_THAN"]:
            if node.left is None:
                node.left = RedBlackNode(key)
                node.left.parent = node
                return node.left
            else:
                return self.insert_node(node.left, key)
        elif node.right is None:
            node.right = RedBlackNode(key)
            node.right.parent = node
            return node.right
        else:
            return self.insert_node(node.right, key)

    # Método rotation_ll
    #       Left left case: rotate right
    #
    #       b                             a
    #      / \                           / \
    #     a   e -> rotation_ll(b) ->    c   b
    #    / \                               / \
    #   c   d                             d   e
    #
    def rotation_ll(self, node):
        tmp = node.left
        node.left = tmp.right
        if tmp.right and tmp.right.key:
            tmp.right.parent = node
        tmp.parent = node.parent
        if not node.parent:
            self.root = tmp
        else:
            if node == node.parent.left:
                node.parent.left = tmp
            else:
                node.parent.right = tmp
        tmp.right = node
        node.parent = tmp

    # Método rotation_rr
    #     Right right case: rotate left
    #
    #     a                                b
    #    / \                              / \
    #   c   b   -> rotation_rr(a) ->     a   e
    #      / \                          / \
    #     d   e                        c   d
    #
    def rotation_rr(self, node):
        tmp = node.right
        node.right = tmp.left
        if tmp.left and tmp.left.key:
            tmp.left.parent= node
        tmp.parent = node.parent
        if not node.parent:
            self.root = tmp
        else:
            if node == node.parent.left:
                node.parent.left = tmp
            else:
                node.parent.right = tmp
        tmp.left = node
        node.parent = tmp

    # Método fix_tree_properties
    def fix_tree_properties(self, node):
        while node and node.parent and node.parent.color == Colors.RED and node.color is not Colors.BLACK:
            parent = node.parent
            grand_parent = parent.parent
            # Caso A: o pai é o filho a esquerda
            if grand_parent and grand_parent.left == parent:
                uncle = grand_parent.right
                # caso 1A: o tio do nó também é vermelho – basta recolorir
                if uncle and uncle.color == Colors.RED:
                    grand_parent.color = Colors.RED
                    parent.color = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grand_parent
                else:
                    # caso 2A: o nó é o filho à direita – rotação à esquerda
                    if node == parent.right:
                        self.rotation_rr(parent)
                        node = parent
                        parent = node.parent
                    # caso 3A: o nó é o filho à esquerda – rotação à direita
                    self.rotation_ll(grand_parent)
                    parent.color = Colors.BLACK
                    grand_parent.color = Colors.RED
                    node = parent
            else:
                # caso B: o pai é o filho à direita
                uncle = grand_parent.left
                # caso 1B: o tio é vermelho – basta recolorir
                if uncle and uncle.color == Colors.RED:
                    grand_parent.color = Colors.RED
                    parent.color = Colors.BLACK
                    uncle.color = Colors.BLACK
                    node = grand_parent
                else:
                    # caso 2B: o nó é o filho à esquerda – rotação à direita
                    if node == parent.left:
                        self.rotation_ll(parent)
                        node = parent
                        parent = node.parent
                    # caso 3B: o nó é o filho à direita – rotação à esquerda
                    self.rotation_rr(grand_parent)
                    parent.color = Colors.BLACK
                    grand_parent.color = Colors.RED
                    node = parent
        self.get_root().color = Colors.BLACK

# Suponha que as classes e enums foram importados corretamente
tree = RedBlackTree()

# Inserir elementos na árvore
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(15)
tree.insert(5)

# A árvore agora deve ter esses elementos e estar balanceada

# Método para percurso em ordem
def in_order_traverse(node, callback):
        if node is not None:
            in_order_traverse(node.left, callback)
            callback(node.key)
            in_order_traverse(node.right, callback)

# Exibir a árvore em ordem
def print_node(value):
    print(value)

tree.in_order_traverse(print_node) # Imprime os valores em ordem crescente

# Criar a árvore Red-Black
rbTree = RedBlackTree()

# Inserir alguns elementos
rbTree.insert(50)
rbTree.insert(30)
rbTree.insert(70)
rbTree.insert(20)
rbTree.insert(40)
rbTree.insert(60)
rbTree.insert(80)

# Verificar a estrutura da árvore
print(f'Árvore Red-Black após inserções:')
rbTree.in_order_traverse(print_node)

# Método de busca
def search(node, key):
    if (node is None or node.key == key):
        return node
    if (key < node.key):
        return search(node.left, key)
    return search(node.right, key)

# Buscar um elemento
search_result = search(rbTree.get_root(), 60)
print(f"Elemento encontrado: {search_result.key}" if search_result else f"Elemento não encontrado")
