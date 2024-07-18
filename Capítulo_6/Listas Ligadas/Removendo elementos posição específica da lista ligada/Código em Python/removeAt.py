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

    # removeAt(position): esse método remove um item de uma posição específica da lista.
    def remove_at(self, index):
        # verifica valores fora do intervalo
        if (index >= 0 and index < self.count):
            current = self.head
            if (index == 0): #  remove o primeiro elemento da lista
                self.head = current.next
            else:
                for i in range(index):
                    # iterar pelos nós da lista ligada até chegarmos à posição desejada
                    previus = current
                    current = current.next
                # faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previus.next = current.next
            self.count -= 1
            return current.element
        return None
    
# Refatorando o método remove
# Podemos refatorar o método remove e usar o método getElementAt criado.

# if (index == 0):
#     self.head = current.next
# else:
#     previous = this.get_element_at(index - 1)
#     current = previous.next
#     previous.next = current.next
# self.count -= 1
