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

# Classe ValuePairLazy
class ValuePairLazy(ValuePair):
    def __init__(self, key, value, is_deleted = False):
        super().__init__(key, value)
        self.key = key
        self.value = value
        self.is_deleted = is_deleted

# Classe HashTableLinearProbingLazy
class HashTableLinearProbingLazy:
    def __init__(self, to_str_fn = defaul_to_string):
        self.to_str_fn = to_str_fn
        self.__table = {}
    
    # Método getter para __table
    def get_table(self):
        return self.__table

    # Método setter para __table
    def set_table(self, key, item):
        self.__table[key] = item
    
    # Método loselose_hash_code
    def loselose_hash_code(self, key):
        if isinstance(key, (int, float)):
            return key
        table_key = self.to_str_fn(key)
        hash = 0
        for i in range(len(table_key)):
            hash += ord(table_key[i])
        return hash % 37
    
    # Método hash_code
    def hash_code(self, key):
        return self.loselose_hash_code(key)
    
    # Método put
    def put(self, key, value):
        if key and value is not None:
            position = self.hash_code(key)
            table = self.get_table()
            if (table.get(position) is None or (table.get(position) is not None and table.get(position).is_deleted)):
                self.set_table(position, ValuePairLazy(key, value))
            else:
                index = position + 1
                while (table.get(index) is not None and table.get(index).is_deleted):
                    index += 1
                self.set_table(index, ValuePairLazy(key, value))
            return True
        return False
    
    # Método get
    def get(self, key):
        position = self.hash_code(key)
        table = self.get_table()
        if table.get(position) is not None:
            if table.get(position).key == key and not table.get(position).is_deleted:
                return table.get(position).value
            index = position + 1
            while table.get(index) is not None and (table.get(index).key != key or table.get(index).is_deleted):
                if table.get(index).key == key and table.get(index).is_deleted:
                    return None
                index += 1
            if table.get(index) is not None and table.get(index).key == key and not table.get(index).is_deleted:
                return table.get(index).value
        return None
    
    # Método remove
    def remove(self, key):
        position = self.hash_code(key)
        table = self.get_table()
        if table.get(position) is not None:
            if table.get(position).key == key and not table.get(position).is_deleted:
                table[position].is_deleted = True
                return True
            index = position + 1
            while table.get(index) is not None and (table.get(index). key != key or table.get(index).is_deleted):
                index += 1
            if table.get(index) is not None and table.get(index). key == key and not table.get(index).is_deleted:
                table[index].is_deleted = True
                return True
            return False
    
    # Método size
    def size(self):
        count = 0
        for value_pair in self.get_table().values():
            if value_pair and not value_pair.is_deleted:
                count += 1
        return count

    # Método is_empty
    def is_empty(self):
        return self.size() == 0
    
    # Método clear
    def clear(self):
        self.__table = {}

    # Método to_string
    def to_string(self):
        if self.is_empty():
            return ""
        keys = list(self.get_table().keys())
        obj_string = f"{{{keys[0]} => {self.get_table()[keys[0]].__str__()}}}"
        for i in range(1, len(keys)):
            obj_string = f"{obj_string}, {{{keys[i]} => {self.get_table()[keys[i]].__str__()}}}"
        return obj_string

# Criação da instância da tabela hash
hashTable = HashTableLinearProbingLazy()

# Adicionando pares chave-valor
hashTable.put('Gandalf', 'gandalf@email.com')
hashTable.put('John', 'johnsnow@email.com')
hashTable.put('Tyrion', 'tyrion@email.com')

# Recuperando valores
print(hashTable.get('Gandalf')) #Output: gandalf@email.com
print(hashTable.get('John')) # Output: johnsnow@email.com
print(hashTable.get('Tyrion')) #Output: tyrrion@email.com
print(hashTable.get('Unknown')) #Output: None

# Removendo valores
print(hashTable.remove('John')) # Output: true
print(hashTable.get('John')) # Output: None

# Exibindo o conteúdo da tabela hash
print (hashTable.to_string()) # Pode mostrar algo como {19 => [Gandalf: gandalf@email.com]}, {16 => [Tyrion: tyrion@email.com]}

for position, value_pair in hashTable.get_table().items():
    print(f"Position: {position}, Key: {value_pair.key}, Value: {value_pair.value}, Deleted: {value_pair.is_deleted}")

# Limpando a tabela hash
hashTable.clear()
print(hashTable.is_empty()) # Output: true
print(hashTable.size()) # Output: 0
