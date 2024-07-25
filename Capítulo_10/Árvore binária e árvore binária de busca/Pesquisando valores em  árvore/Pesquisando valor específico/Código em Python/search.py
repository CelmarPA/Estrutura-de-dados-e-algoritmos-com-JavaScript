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

    # search(key): esse método busca a chave na árvore e devolve true se ela existir, e false se o nó não existir.
    def search(self, key):
        return self.search_node(self.root, key)
    
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
        
tree = BinarySearchTree()

print("Key 1 found." if tree.search(1) else "Key 1 not found.")
print("Key 8 found." if tree.search(8) else "Key 8 not found.")
