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

    # remove(key): esse método remove a chave da árvore.
    def remove(self, key):
        self.root = self.remove_node(self.root, key)

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
