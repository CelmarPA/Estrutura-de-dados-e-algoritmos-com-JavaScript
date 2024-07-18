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

    # // insert(element, position): esse método insere um novo elemento em uma posição específica da lista.
    def insert(self, element, index):
        if (index >= 0 and index <= self.count):
            node = Node(element)
            if (index == 0): # adiciona na primeira posição
                current = self.head
                node.next = current
                self.head = node
            else:
                previous = self.getElementAt(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
            self.count += 1
            return True
        return False
