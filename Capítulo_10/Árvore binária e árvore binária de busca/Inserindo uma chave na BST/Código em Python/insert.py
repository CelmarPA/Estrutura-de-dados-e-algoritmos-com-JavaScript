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

    # insert(key): esse método insere uma nova chave na árvore.
    def insert(self, key):
        if self.root is None:
            self.root = Node(key)
        else:
            self.insert_node(self.root, key)
    
    # Método auxiliar insert_node(node, key):
    def insert_node(self, node, key):
        if self.compare_fn(key, node.key) == Compare["LESS_THAN"]:
            if node.left is None:
                node.left = Node(key)
            else:
                self.insert_node(node.left, key)
        else:
            if node.right is None:
                node.right = Node(key)
            else:
                self.insert_node(node.right,key)

tree = BinarySearchTree()
tree.insert(11)

tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.insert(6)
