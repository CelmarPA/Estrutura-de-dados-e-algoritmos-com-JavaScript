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
        self.__count = 0
        self.__head = None
        self.equalsFn = equalsFn

    # Método getter para __head
    def get_head(self):
        return self.__head

    # Método setter para __head
    def set_head(self, head):
        self.__head = head
    
    # Método getter para __count
    def get_count(self):
        return self.__count
    
    # Método setter para __count
    def set_count(self, count):
        self.__count = count

    # Método setter para increment __count
    def set_increment_count(self):
        self.__count += 1

    # Método setter para decrement __count
    def set_decrement_count(self):
        self.__count -= 1

    # push(element): esse método adiciona um novo elemento no final da lista.1
    def push(self, element):
        node = Node(element) # cria um novo Node passando element como o seu valor
        if (self.get_head() == None):
            self.set_head(node)
        else:
            current = self.get_head()
            while (current.next != None):
                current = current.next
            current.next = node
        self.set_increment_count()

    # removeAt(position): esse método remove um item de uma posição específica da lista.
    def remove_at(self, index):
        # verifica valores fora do intervalo
        if (index >= 0 and index < self.get_count()):
            current = self.get_head()
            if (index == 0): # remove o primeiro elemento da lista
                self.set_head(current.next)
            else:
                for i in range(index):
                    # iterar pelos nós da lista ligada até chegarmos à posição desejada
                    previous = current
                    current = current.next
                # faz a ligação de previous com o next de current: pula esse elemento para removê-lo
                previous.next = current.next
            self.set_decrement_count()
            return current.element
        return None

    # getElementAt(index): esse método devolve o elemento que está em uma posição específica da lista. Se o elemento não estiver na lista, undefined será devolvido.
    def get_element_at(self, index):
        if (index >= 0 and index <= self.get_count()):
            node = self.get_head()
            for i in range(index):
                if node is None:
                    break
                node = node.next
            return node
        return None

    # insert(element, position): esse método insere um novo elemento em uma posição específica da lista.
    def insert(self, element, index):
        if (index >= 0 and index <= self.get_count()):
            node = Node(element)
            if (index == 0): # adiciona na primeira posição
                current = self.get_head()
                node.next = current
                self.set_head(node)
            else:
                previus = self.get_element_at(index - 1)
                current = previus.next
                node.next = current
                previus.next = node
            self.set_increment_count()
            return True
        return False
    
    # indexOf(element): esse método devolve o índice do elemento na lista. Se o elemento não estiver na lista, -1 será devolvido.
    def index_of(self, element):
        current = self.get_head()
        for i in range(self.get_count()):
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
        return self.get_count()
    
    def is_empty(self):
        return self.size() == 0
    
    def clear(self):
        self.set_count(0)
        self.set_head(None)
    
    def to_string(self):
        if (self.get_head() == None):
            return ""
        obj_string = f"{self.get_head().element}"
        current = self.get_head().next
        for i in range(1, self.size()):
            if current is None:
                break
            obj_string = f"{obj_string}, {current.element}"
            current = current.next
        return obj_string

# Classe DoublyLinkedList:
class DoublyLinkedList(LinkedList):
    def __ini__(self, equalsFn = defaultEquals):
        super().__init__(equalsFn)
        self.__tail = None

    # Método getter para __tail
    def get_tail(self):
        return self.__tail
    
    # Método setter para __tail
    def set_tail(self, tail):
        self.__tail = tail

    # Método insert:
    def insert(self, element, index):
        if (index >= 0 and index <= self.get_count()):
            node = DoublyLinkedList(element)
            current = self.get_head()
            if (index == 0):
                if (self.get_head() == None):
                    self.set_head(node)
                    self.set_tail(node)
                else:
                    node.next = current
                    current.prev = node
                    self.set_head(node)
            elif (index == self.get_count()): # último item
                current = self.get_tail()
                current.next = node
                node.prev = current
                self.set_tail(node)
            else:
                previous = self.get_element_at(index - 1)
                current = previous.next
                node.next = current
                previous.next = node
                current.prev = node
                node.prev = previous
            self.set_increment_count()
            return True
        return False
