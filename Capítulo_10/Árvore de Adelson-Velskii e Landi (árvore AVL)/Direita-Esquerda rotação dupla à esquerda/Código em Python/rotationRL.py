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

# Classe AVLTree
class AVLTree(BinarySearchTree):
    def __init__(self, compare_fn = default_compare):
        super().__init__(compare_fn)
        self.compare_fn = compare_fn
        self.root = None

    # Método rotation_rl
    def rotation_rl(self, node):
        node.right = self.rotation_ll(node.right)
        return self.rotation_rr(node)
    