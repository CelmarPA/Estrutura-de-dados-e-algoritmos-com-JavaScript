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
        
    # push(element): esse método adiciona um novo elemento no final da lista.
    def push(self, element):
        node = Node(element) # cria um novo Node passando element como o seu valor
        if (self.head == None):
            self.head = node
        else:
            current = self.head
            while (current.next != None):
                current = current.next
            current.next = node
        self.count += 1

# Podemos usar e testar a estrutura de dados que criamos até agora com o código a seguir:
list =  LinkedList()
list.push(15)
list.push(10)
print(list.head.next.element)
