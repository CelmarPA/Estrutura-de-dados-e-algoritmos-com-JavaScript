# defaultToString:
def defaultToString(item):
    if item is None:
        return "NONE"
    elif isinstance(item, str):
        return f"{item}"
    return str(item)

# Classe ValuePair
class ValuePair:
    def __init__(self, key, value):
        self.key = key
        self.value = value
    
    def __str__(self):
        return f"[#{self.key}: {self.value}]"
    
# Classe Dictionary
class Dictionary:
    def __init__(self, to_str_fn = defaultToString):
        self.to_str_fn = to_str_fn
        self.__table = {}

    # Método getter para __table:
    def get_table(self):
        return self.__table

    # Método setter para __table:
    def set_table(self, key, item):
        self.__table[key] = item
    
    # has_key(key): esse método devolve true se key estiver presente no dicionário, e false caso contrário.
    def has_key(self, key):
        return self.to_str_fn(key) in self.get_table()
    
    # set(key, value): esse método adiciona um novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.
    def set(self, key, value):
        if (key and value is not None):
            table_key = self.to_str_fn(key)
            self.set_table(table_key, ValuePair(key, value))
            return True
        return False
    
    # remove(key): esse método remove value do dicionário usando key como o parâmetro de busca.
    def remove(self, key):
        if self.has_key(key):
            del self.get_table()[self.to_str_fn(key)]
            return True
        return False
    
    # get(key): esse método devolve um value específico do dicionário usando key como o parâmetro de busca.
    def get(self, key):
        value_pair = self.get_table()[self.to_str_fn(key)]
        return None if value_pair is None else value_pair.value
    
    # Segunda opção do método get:
    def get1(self, key):
        if self.has_key(key):
            return self.get_table()[self.to_str_fn(key)]
        return None
    
    # keyValues(): esse método devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.
    def key_values(self):
        return [{"key": pair.key, "value": pair.value}  for pair in self.get_table().values()]
    
    # Outra implementação que pode ser usada é:
    def key_values1(self):
        value_pairs = []
        for  k in self.get_table():
            if self.has_key(k):
                value_pairs.append(self.get_table()[k])
        return value_pairs
    
    # keys(): esse método devolve um array com todas as chaves contidas no dicionário.
    def keys(self):
        return [pair.key for pair in self.get_table().values()]
    
    # A lógica usada no método keys também pode ser escrita assim:
    def keys1(self):
        keys = []
        value_pair = list(self.get_table().values())
        for i in range(len(value_pair)):
            keys.append(value_pair[i].key)
        return keys
    
    # values(): esse método devolve um array com todos os valores contidos no dicionário.
    def values(self):
        return [pair.value for pair in self.get_table().values()]
    
    # forEach(callBackFn): esse método itera pelos valores (value) do dicionário. A função callbackFn tem dois parâmetros: key e value. Esse método também pode ser interrompido caso a função de callback devolva false.
    def for_each(self, callback_fn):
        for pair in self.get_table().values():
            result = callback_fn(pair.key, pair.value)
            if (result is False):
                break

    # size(): esse método devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array.
    def size(self):
        return len(self.get_table())
    
    # is_empty(): esse método devolve true se size for igual a zero, e false caso contrário.
    def is_empty(self):
        return self.size() == 0
    
    # clear(): esse método remove todos os valores do dicionário.
    def clear(self):
        self.__table = {}
    
    # Método to_string:
    def to_string(self):
        if self.is_empty():
            return ""
        value_pairs = self.key_values()
        obj_string = f"{value_pairs[0].__str__()}"
        for i in range (1, len(value_pairs)):
            obj_string = f"{obj_string}, {value_pairs[i].__str__()}"
        return obj_string

# Classe Queue
class Queue:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def enqueue(self, element):
        self.items[self.count] = element
        self.count += 1

    def dequeue(self):
        if (self.is_empty()):
            return None
        result = self.items[self.lowest_count]
        del self.items[self.lowest_count]
        self.lowest_count += 1
        return result
    
    def peek(self):
        if (self.is_empty()):
            return None
        return self.items[self.lowest_count]
    
    def is_empty(self): 
        return self.count - self.lowest_count == 0
    
    def size(self):
        return self.count - self.lowest_count
    
    def clear(self):
        self.items = {}
        self.count = 0
        self.lowest_count = 0

    def to_string(self):
        if (self.is_empty()):
            return ""
        obj_string = f"{self.items[self.lowest_count]}"
        for i in range(self.lowest_count + 1, self.count):
            obj_string = f"{obj_string}, {self.items[i]}"
        return obj_string

# Classe Stack
class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}

    def push(self, element):
        self.items[self.count] = element
        self.count += 1
    
    def size(self):
        return len(self.items)
    
    def is_empty(self):
        return len(self.items) == 0
    
    def pop(self):
        if self.is_empty():
            return None
        self.count -= 1
        result = self.items[self.count]
        del self.items[self.count]
        return result
    
    def peek(self):
        if not (self.is_empty()):
            return self.items[self.count - 1]
        else:
            return None
    
    def clear(self):
        self.count = 0
        self.items = {}

    def to_string(self):
        if self.is_empty():
            return ""
        objString = f"{self.items[0]}"
        for i in range(1, self.count):
            objString = f"{objString}, {self.items[i]}"
        return objString

# Classe Graph
class Graph:
    def __init__(self, is_directed = False):
        self.is_directed = is_directed
        self.__vertices = []
        self.adj_list = Dictionary()

    # Método getter para __vertices:
    def get_vertices(self):
        return self.__vertices
    
    # Método getter para __vertices:
    def set_vertices(self, vertice):
        self.__vertices.append(vertice)

    # Método add_vertex
    def add_vertex(self, v):
        if v not in self.get_vertices():
            self.set_vertices(v)
            self.adj_list.set(v, [])

    # Método add_edge
    def add_edge(self, v, w):
        if not self.adj_list.get(v):
            self.add_vertex(v)
        if not self.adj_list.get(w):
            self.add_vertex(w)
        self.adj_list.get(v).append(w)
        if not self.is_directed:
            self.adj_list.get(w).append(v)
    
    # Método get_adj_list
    def get_adj_list(self):
        return self.adj_list
    
    # Método to_string
    def to_string(self):
        s = ""
        vertices = self.get_vertices()
        for i in range(len(vertices)):
            s += f"{vertices[i]} -> "
            neighbors = self.adj_list.get(vertices[i])
            for j in range(len(neighbors)):
                s += f"{neighbors[j]} "
            s += "\n"
        return s

# Variável Colors
Colors = {
    "WHITE": 0,
    "GREY": 1,
    "BLACK": 2
}

# Função initialize_color
def initialize_color(vertices):
    color = {}
    for i in range(len(vertices)):
        color[vertices[i]] = Colors["WHITE"]
    return color

# Função BFS
def BFS(graph, start_vertex):
    vertices = graph.get_vertices()
    adj_list = graph.get_adj_list()
    color = initialize_color(vertices)
    queue = Queue()
    distances = {}
    predecessors = {}
    queue.enqueue(start_vertex)
    for i in range(len(vertices)):
        distances[vertices[i]] = 0
        predecessors[vertices[i]] = None
    while not queue.is_empty():
        u = queue.dequeue()
        neighbors = adj_list.get(u)
        color[u] = Colors["GREY"]
        for i in range(len(neighbors)):
            w = neighbors[i]
            if color[w] == Colors["WHITE"]:
                color[w] = Colors["GREY"]
                distances[w] = distances[u] + 1
                predecessors[w] = u
                queue.enqueue(w)
        color[u] = Colors["BLACK"]
    return {
        "distances": distances,
        "predecessors": predecessors
    }

# Criando a instancia de Graph
graph = Graph()

# Array com todos os vértices que queremos adicionar em nosso grafo
my_vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]

# Adicionar os vertices com loop for
for i in range(len(my_vertices)):
    graph.add_vertex(my_vertices[i])


# Adicionar as arestas 
graph.add_edge("A", "B")
graph.add_edge("A", "C")
graph.add_edge("A", "D")
graph.add_edge("C", "D")
graph.add_edge("C", "G")
graph.add_edge("D", "G")
graph.add_edge("D", "H")
graph.add_edge("B", "E")
graph.add_edge("B", "F")
graph.add_edge("E", "I")

# Vamos testar esse algoritmo executando o código a seguir
shortest_path_A = BFS(graph, my_vertices[0])
print(shortest_path_A)

"""
{'distances': {'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 2, 'G': 2, 'H': 2, 'I': 3}, 'predecessors': {'A': None, 'B': 'A', 'C': 'A', 'D': 'A', 'E': 'B', 'F': 'B', 'G': 'C', 'H': 'D', 'I': 'E'}}
"""

# Com o array de antecessores, podemos construir o caminho do vértice A até os demais vértices usando o código a seguir.
from_vertex = my_vertices[0]
for i in range(1, len(my_vertices)):
    to_vertex = my_vertices[i]
    path = Stack()
    # Construindo o caminho
    v = to_vertex
    while v != from_vertex:
        path.push(v)
        v = shortest_path_A["predecessors"][v]
    
    path.push(from_vertex)
    # Montando a string de caminho
    s = path.pop()
    while not path.is_empty():
        s += f" - " + path.pop()
    print(s)

"""
 A - B
 A - C
 A - D
 A - E - E
 A - F - F
 A - G - G
 A - H - H
 A - I - I - I
"""
