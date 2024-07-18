# Funções necessárias:
# DefaultEquals:
def defaultEquals(a, b):
    return a == b

# Compare Elements:
Compare = {
    "LESS_THAN": -1,
    "BIGGER_THAN": 1
}

# defaultComapre:
def defaultCompare(a, b):
    if (a == b):
        return 0
    return Compare["LESS_THAN"] if a < b else  Compare["BIGGER_THAN"]

# Classes necessárias:
# Class Node
class Node:
    def __init__(self, element):
        self.element = element
        self.next = None

# Class DoublyNode
class DoublyNode(Node):
    def __init__(self, element, next_node = None, prev = None):
        super().__init__(element)
        self.next = next_node
        self.prev = prev

# Classe LinkedList:
class LinkedList: 
    def __init__(self, equalsFn = defaultEquals):
        self.count = 0
        self.head = None
        self.equalsFn = equalsFn
    
    # getElementAt(index): esse método devolve o elemento que está em uma posição específica da lista. Se o elemento não estiver na lista, undefined será devolvido.
    def get_element_at(self, index):
        if (index >= 0 and index <= self.count):
            node = self.head
            for i in range(index):
                if node is None:
                    break
                node = node.next
            return node
        return None
