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
    def __init__(self, equalsFn = defaultEquals):
        super().__init__(equalsFn)
        self.__tail = None
    
    # Método getter para __tail
    def get_tail(self):
        return self.__tail
    
    # Método setter para __tail
    def set_tail(self, tail):
        self.__tail = tail

    # Método push
    def push(self, element):
        node = DoublyNode(element)
        if self.get_head() is None:
            self.set_head(node)
            self.set_tail(node)
        else:
            # adicionar no final
            self.get_tail().next = node
            node.prev = self.get_tail()
            self.set_tail(node)
        self.set_increment_count()

    # Método insert
    def insert(self, element, index):
        if (index >= 0 and index <+ self.get_count()):
            node = DoublyNode(element)
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
    
    # Método remove_at
    def remove_at(self, index):
        if (index >= 0 and index <= self.get_count()):
            current = self.get_head()
            if (index == 0):
                self.set_head(current.next)
                # se houver apenas um item, atualizamos tail também
                if (self.get_count() == 1):
                    self.set_tail(None)
                else:
                    self.get_head().prev = None
            elif (index == self.get_count() - 1): 
                # último item
                current = self.get_tail()
                self.set_tail(current.prev)
                self.get_tail().next = None
            else:
                current = self.get_element_at(index)
                previous = current.prev
                # faz a ligação de previous com o next de current – pula esse elemento para removê-lo
                previous.next = current.next
                current.next.prev = previous
            self.set_decrement_count()
            return current.element
        return None
    
    # Método index_of
    def index_of(self, element):
        current = self.get_head()
        index = 0
        while current is not None:
            if self.equalsFn(element, current.element):
                return index
            index += 1
            current = current.next
        return - 1

    # Método is_empty
    def is_empty(self):
        return self.size() == 0
    
    # Método size
    def size(self):
        return self.get_count()

    # Método clear
    def clear(self):
        super().clear()
        self.set_tail(None)

    # Método to_string
    def to_string(self):
        if (self.get_tail() == None):
            return ""
        obj_string = f"{self.get_head().element}"
        current = self.get_head().next
        while (current != None):
            obj_string = f"{obj_string}, {current.element}"
            current = current.next
        return obj_string
    
    # Método inverse_to_string
    def inverse_to_string(self):
        if (self.get_tail() == None):
            return ""
        obj_string = f'{self.get_tail().element}'
        previous = self.get_tail().prev
        while (previous != None):
            obj_string = f"{obj_string}, {previous.element}"
            previous = previous.prev
        return obj_string

# Criando uma instância da lista duplamente encadeada
doubly_linked_list = DoublyLinkedList()

# Adicionando elementos à lista
doubly_linked_list.push(1)
doubly_linked_list.push(2)
doubly_linked_list.push(3)
print(doubly_linked_list.to_string())  # Output esperado: "1, 2, 3"

# Inserindo um elemento em uma posição específica
doubly_linked_list.insert(4, 2)
print(doubly_linked_list.to_string())  # Output esperado: "1, 2, 4, 3"

# Removendo um elemento de uma posição específica
removed_element = doubly_linked_list.remove_at(2)
print(f"Removed: {removed_element}")  # Output esperado: "Removed: 4"
print(doubly_linked_list.to_string())  # Output esperado: "1, 2, 3"

# Encontrando o índice de um elemento
index_of_2 = doubly_linked_list.index_of(2)
print(f"Index of 2: {index_of_2}")  # Output esperado: "Index of 2: 1"

# Removendo um elemento específico
doubly_linked_list.remove(2)
print(doubly_linked_list.to_string())  # Output esperado: "1, 3"

# Verificando o tamanho da lista
size_of_list = doubly_linked_list.size()
print(f"Size of list: {size_of_list}")  # Output esperado: "Size of list: 2"

# Verificando se a lista está vazia
is_empty = doubly_linked_list.is_empty()
print(f"Is list empty: {is_empty}")  # Output esperado: "Is list empty: False"

# Limpando a lista
doubly_linked_list.clear()
print(doubly_linked_list.to_string())  # Output esperado: ""

# Verificando se a lista está vazia após limpar
is_empty_after_clear = doubly_linked_list.is_empty()
print(f"Is list empty after clear: {is_empty_after_clear}")  # Output esperado: "Is list empty after clear: True"

# Adicionando elementos novamente para testar to_string e inverse_to_string
doubly_linked_list.push(1)
doubly_linked_list.push(2)
doubly_linked_list.push(3)

# Imprimindo a lista de forma inversa
print(doubly_linked_list.inverse_to_string())  # Output esperado: "3, 2, 1"
