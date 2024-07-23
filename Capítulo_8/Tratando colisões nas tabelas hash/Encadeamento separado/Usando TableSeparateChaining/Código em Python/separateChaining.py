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

# defaultToString:
def defaul_to_string(item):
    if item is None:
        return "NONE"
    elif isinstance(item, str):
        return f"{item}"
    return str(item)
    
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
    
# Classe ValuePair
class ValuePair:
    def __init__(self, key, value):
        self.key = key
        self.value = value

    def __str__(self):
        return f"[#{self.key}: {self.value}]"
    
# Classe HashTableSeparateChaining
class HashTableSeparateChaining:
    def __init__(self, to_str_fn = defaul_to_string):
        self.to_str_fn = to_str_fn
        self.__table = {}
    
    # Método getter para __table:
    def get_table(self):
        return self.__table

    # Método setter para __table:
    def set_table(self, key, item):
        self.__table[key] = item
    
    # Método loselose_hash_code:
    def loselose_hash_code(self, key):
        if isinstance(key, (int, float)):
            return key
        table_key = self.to_str_fn(key)
        hash = 0
        for i in range(len(table_key)):
            hash += ord(table_key[i])
        return hash % 37
    
    # Método hash_code:
    def hash_code(self, key):
        return self.loselose_hash_code(key)
    
    # put(key,value): esse método adiciona um novo item à tabela hash (ou pode atualizá-la também).
    def put(self, key, value):
        if key and value is not None:
            position = self.hash_code(key)
            if position not in self.get_table():
                self.set_table(position, LinkedList())
            self.get_table()[position].push(ValuePair(key, value))
            return True
        return False
    
    # get(key): esse método devolve um value específico encontrado com key.
    def get(self, key):
        position = self.hash_code(key)
        linked_list = self.get_table().get(position)
        if linked_list is not None and not linked_list.is_empty():
            current = linked_list.get_head()
            while current is not None:
                if current.element.key == key:
                    return current.element.value
                current = current.next
        return None

    # remove(key): esse método remove o value da tabela hash usando key.
    def remove(self, key):
        position = self.hash_code(key)
        linked_list = self.get_table().get(position)
        if linked_list is not None and not linked_list.is_empty():
            current = linked_list.get_head()
            while current is not None:
                if current.element.key == key:
                    linked_list.remove(current.element)
                    if linked_list.is_empty():
                        del self.get_table()[position]
                    return True
                current = current.next
        return False
    
    # Método size:
    def size(self):
        return len(self.get_table())
    
    # Método is_empty:
    def is_empty(self):
        return self.size() == 0
    
    # Método to_string
    def to_string(self):
        if self.is_empty():
            return ""
        keys = list(self.get_table().keys())
        obj_string = f"{{{keys[0]} => {self.get_table()[keys[0]].to_string()}}}"
        for i in range(1, len(keys)):
            obj_string = f"{obj_string}, {{{keys[i]} => {self.get_table()[keys[i]].to_string()}}}"
        return obj_string

# Criação da Tabela Hash
hashTable = HashTableSeparateChaining()

# Adicionando elementos com put
hashTable.put("Gandalf", "gandalf@email.com")
hashTable.put("John", "johnsnow@email.com")
hashTable.put("Tyrion", "tyrion@email.com")

print(hashTable.to_string()) # {19 => {Gandalf: gandalf@email.com}}, {29 => {John: johnsnow@email.com}}, {16 => {Tyrion: tyrion@email.com}}

# Recuperando elementos com get
print(hashTable.get("Gandalf")) # gandalf@email.com
print(hashTable.get("John")) # johnsnow@email.com
print(hashTable.get("Tyrion")) # tyrion@email.com
print(hashTable.get("Frodo")) # None (não existe)

# Removendo um elemento existente
print(hashTable.remove("John")) # true
print(hashTable.get("John")) # None (elemento removido)

# Tentando remover um elemento que não existe
print(hashTable.remove("Frodo")) # false (elemento não existe)

# Verificando o tamanho atual da tabela hash
print(hashTable.size()) # 2 (dois elementos restantes após a remoção de "John")

# Verificando se a tabela hash está vazia
print(hashTable.is_empty()) # false (ainda existem elementos na tabela)

# Adicionando mais elementos à tabela hash
hashTable.put("Frodo", "frodo@email.com")
hashTable.put("Sam", "sam@email.com")

# Verificando o conteúdo atualizado da tabela hash
print(hashTable.to_string()) # {19 => {Gandalf: gandalf@email.com}}, {16 => {Tyrion: tyrion@email.com}}, {34 => {Frodo: frodo@email.com}}, {11 => {Sam: sam@email.com}}

# Verificando novamente o tamanho da tabela hash
print(hashTable.size()) # 4 (quatro elementos na tabela)

# Verificando novamente se a tabela hash está vazia
print(hashTable.is_empty()) # false (tabela não está vazia)
