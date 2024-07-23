# defaultToString:
def defaul_to_string(item):
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

# Classe HashTable
class HashTable:
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
    def loselose_hash_code(self,  key):
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
            self.set_table(position, ValuePair(key, value))
            return True
        return False
    
    # get(key): esse método devolve um value específico encontrado com key.
    def get(self, key):
        hash = self.hash_code(key)
        if hash in self.get_table():
            value_pair = self.get_table()[hash]
            return None if value_pair is None else value_pair.value
        return None
    
    # remove(key): esse método remove o value da tabela hash usando key.
    def remove(self, key):
        hash = self.hash_code(key)
        table = self.get_table()
        if hash in table:
            del table[hash]
            return True
        return False

# Vamos testar a classe HashTable executando alguns exemplos:
hash = HashTable()
hash.put("Gandalf", "gandalf@email.com")
hash.put('John', 'johnsnow@email.com')
hash.put('Tyrion', 'tyrion@email.com')
print(hash.hash_code('Gandalf'), '- Gandalf') # 19 - Gandalf
print(hash.hash_code('John'), '- John') # 29 - John
print(hash.hash_code('Tyrion'), '- Tyrion') # 16 - Tyrion

# Vamos agora testar o método get executando o código a seguir:
print(hash.get('Gandalf')) # gandalf@email.com
print(hash.get('Loiane')) # None

# A seguir, vamos tentar remover Gandalf da HashTable, assim:
hash.remove('Gandalf')
print(hash.get('Gandalf'))
