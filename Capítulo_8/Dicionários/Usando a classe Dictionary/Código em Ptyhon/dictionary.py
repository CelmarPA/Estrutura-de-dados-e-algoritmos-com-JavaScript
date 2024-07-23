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
    
# Vamos executar um código que utilize a classe que criamos:
dictionary = Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

# Se executarmos o código a seguir, veremos uma saída igual a true:
print(dictionary.has_key('Gandalf'))

# O código seguinte exibirá 3:
print(dictionary.size())

# Vamos agora executar estas linhas de código:
print(dictionary.keys()) # ["Gandalf", "John", "Tyrion"]
print(dictionary.values()) # ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
print(dictionary.get1('Tyrion')) # tyrion@email.com

# Execute as linhas a seguir também:
dictionary.remove('John')
print(dictionary.keys1()) # ["Gandalf", "Tyrion"]
print(dictionary.values()) # ["gandalf@email.com", "tyrion@email.com"]
print(dictionary.key_values()) # [{key: "Gandalf", value: "gandalf@email.com"}, {key: "Tyrion", value: "tyrion@email.com"}]


# Exemplo de uso for_each():

# Função de callback que será usada com for_each
def print_key_value(key, value):
    print(f"Chave: {key}, Valor: {value}")
    # Retorna True para continuar a iteração, ou False para interromper
    return True

# Outra função de callback que interrompe a iteração se a chave for 'John'
def stop_on_john(key, value):
    print(f"Chave: {key}, Valor: {value}")
    if key == 'John':
        return False  # Interrompe a iteração
    return True


dictionary.clear()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')


print("Usando print_key_value:")
dictionary.for_each(print_key_value)

print("\nUsando stop_on_john:")
dictionary.for_each(stop_on_john)

# Método to_string()
print(dictionary.to_string())