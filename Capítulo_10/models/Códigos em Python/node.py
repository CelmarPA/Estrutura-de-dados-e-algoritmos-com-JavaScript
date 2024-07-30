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
