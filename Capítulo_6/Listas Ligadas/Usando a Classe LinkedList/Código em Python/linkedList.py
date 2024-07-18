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

    # push(element): esse método adiciona um novo elemento no final da lista.1
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

    # removeAt(position): esse método remove um item de uma posição específica da lista.
    def remove_at(self, index):
        # verifica valores fora do intervalo
        if (index > 0 and index < self.count):
            current = self.head
            if (index == 0): # remove o primeiro elemento da lista
                self.head = current.next
            else:
                for i in range(index):
                    # iterar pelos nós da lista ligada até chegarmos à posição desejada
                    previous = current
                    current = current.next
                # faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next
            self.count -= 1
            return current.element
        return None

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

    # // insert(element, position): esse método insere um novo elemento em uma posição específica da lista.
    def insert(self, element, index):
        if (index >= 0 and index <= self.count):
            node = Node(element)
            if (index == 0): # adiciona na primeira posição
                current = self.head
                node.next = current
                self.head = node
            else:
                previus = self.get_element_at(index - 1)
                current = previus.next
                node.next = current
                previus.next = node
            self.count += 1
            return True
        return False
    # indexOf(element): esse método devolve o índice do elemento na lista. Se o elemento não estiver na lista, -1 será devolvido.
    def index_of(self, element):
        current = self.head
        for i in range(self.count):
            if current is None:
                break
            if self.equalsFn(element, current.element):
                return i
            current = current.next
        return -1
    
    # removeAt(position): esse método remove um item de uma posição específica da lista.
    def remove(self, element):
        index = self.index_of(element)
        return self.remove_at(index)
    
    def size(self):
        return self.count
    
    def is_empty(self):
        return self.size() == 0
    
    def get_head(self):
        return self.head
    
    def clear(self):
        self.count = 0
        self.head = None
    
    def to_string(self):
        if (self.head == None):
            return ""
        obj_string = f"{self.head.element}"
        current = self.head.next
        for i in range(1, self.size()):
            if current is None:
                break
            obj_string = f"{obj_string}, {current.element}"
            current = current.next
        return obj_string
