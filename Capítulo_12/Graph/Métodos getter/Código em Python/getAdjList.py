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

# Classe Graph
class Graph:
    def __init__(self, is_directed = False):
        self.is_directed = is_directed
        self.vertices = []
        self.adj_list = Dictionary()

    # Método get_adj_list
    def get_adj_list(self):
        return self.adj_list
    