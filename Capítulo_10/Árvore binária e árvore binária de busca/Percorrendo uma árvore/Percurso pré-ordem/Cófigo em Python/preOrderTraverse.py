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

# Classe Node
class Node:
    def __init__(self, key):
        self.key = key # valor do nó
        self.left = None # refêrencia ao nó filho à esquerda
        self.right = None # refêrencia ao nó filho à esquerda

# Classe BinarySeachTree:
class BinarySearchTree:
    def __init__(self, compare_fn = default_compare):
        self.compare_fn = compare_fn # usado para comparar os valores dos nós
        self.root = None # nó raiz do tipo Node

    # pre_order_traverse(): esse método visita todos os nós da árvore usando um percurso pré-ordem (pre-order).
    def pre_order_traverse(self, callback):
        self.pre_order_traverse_node(self.root, callback)
    
    # Método auxiliar pre_order_traverse_node
    def pre_order_traverse_node(self, node, callback):
        if node is not None:
            callback(node.key)
            self.pre_order_traverse_node(node.left, callback)
            self.pre_order_traverse_node(node.right, callback)

tree = BinarySearchTree()

def print_node(value):
    print(value)

tree.pre_order_traverse(print_node)
