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
    
# Classe CircularLinkedList
class CircularLinkedList(LinkedList):
    def __init__(self, equalsFn =  defaultEquals):
        super().__init__(equalsFn)

    # Método insert
    def insert(self, element, index):
        if (index >= 0 and index <= self.get_count()):
            node = Node(element)
            current = self.get_head()
            if (index == 0): # Primeiro item
                if self.get_head() is None:
                    self.set_head(node)
                    node.next = self.get_head()
                else:
                    node.next = current
                    current = self.get_element_at(self.size() - 1)
                    # atualiza o útlimo elemento
                    self.set_head(node)
                    current.next = self.get_head()
            else:
                previous = self.get_element_at(index - 1)
                node.next = previous.next
                previous.next = node
            self.set_increment_count()
            return True
        return False
    
    # Método remove_at
    def remove_at(self, index):
        if (index >= 0 and index <= self.get_count()):
            current = self.get_head()
            if (index == 0):
                if (self.size() == 1):
                    self.set_head(None)
                else:
                    removed = self.get_head()
                    current = self.get_element_at(self.size())
                    self.set_head(self.get_head().next)
                    current.next = self.get_head()
                    current = removed
            else:
                # não há necessidade de atualizar o último elemento da lista circular
                previous = self.get_element_at(index - 1)
                current = previous.next
                previous.next = current.next
            self.set_decrement_count()
            return current.element
        return None

# Testando a classe CircularLinkedList

# Criando uma instância da lista circular
circular_linked_list = CircularLinkedList()

# Testando o método push
circular_linked_list.push(1)
circular_linked_list.push(2)
circular_linked_list.push(3)
print(circular_linked_list.to_string())  # Saída: "1, 2, 3"

# Testando o método removeAt
print(circular_linked_list.remove_at(1))  # Saída: 2
print(circular_linked_list.to_string())  # Saída: "1, 3"

# Testando o método getElementAt
print(circular_linked_list.get_element_at(1).element)  # Saída: 3
print(circular_linked_list.get_element_at(0).element)  # Saída: 1

# Testando o método insert
circular_linked_list.insert(4, 1)
print(circular_linked_list.to_string())  # Saída: "1, 4, 3"
circular_linked_list.insert(5, 0)
print(circular_linked_list.to_string())  # Saída: "5, 1, 4, 3"

# Testando o método indexOf
print(circular_linked_list.index_of(4))  # Saída: 2
print(circular_linked_list.index_of(6))  # Saída: -1

# Testando o método remove
print(circular_linked_list.remove(4))  # Saída: 4
print(circular_linked_list.to_string())  # Saída: "5, 1, 3"

# Testando o método size
print(circular_linked_list.size())  # Saída: 3

# Testando o método isEmpty
print(circular_linked_list.is_empty())  # Saída: False
circular_linked_list.remove(5)
circular_linked_list.remove(1)
circular_linked_list.remove(3)
print(circular_linked_list.is_empty())  # Saída: True

# Testando o método getHead
circular_linked_list.push(6)
print(circular_linked_list.get_head().element)  # Saída: 6

# Testando o método toString
circular_linked_list.push(7)
circular_linked_list.push(8)
print(circular_linked_list.to_string())  # Saída: "6, 7, 8"

# Testando o método clear
circular_linked_list.clear()
print(circular_linked_list.to_string())  # Saída: ""
print(circular_linked_list.is_empty())  # Saída: True

# Adicionando alguns elementos
circular_linked_list.insert('A', 0)  # Lista: A
circular_linked_list.insert('B', 1)  # Lista: A -> B
circular_linked_list.insert('C', 2)  # Lista: A -> B -> C
circular_linked_list.insert('D', 3)  # Lista: A -> B -> C -> D

print("Lista antes da remoção:")
current = circular_linked_list.get_head()
for _ in range(circular_linked_list.size()):
    print(current.element)
    current = current.next

# Removendo o elemento na posição 1 (índice 1 - começando do 0)
removed_element = circular_linked_list.remove_at(1)
print(f"Elemento removido: {removed_element}")

print("Lista após a remoção:")
current = circular_linked_list.get_head()
for _ in range(circular_linked_list.size()):
    print(current.element)
    current = current.next