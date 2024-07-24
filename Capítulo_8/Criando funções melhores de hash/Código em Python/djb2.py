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
    
# Classe HashTableLinearProbing
class HashTableLinearProbing:
    def __init__(self, to_str_fn = defaul_to_string):
        self.to_str_fn = to_str_fn
        self.__table = {}

    # Método getter para __table
    def get_table(self):
        return self.__table

    # Método setter para __table
    def set_table(self, key, item):
        self.__table[key] = item

    # Método djb2_hash_code
    def djb2_hash_code(self, key):
        table_key = self.to_str_fn(key)
        hash = 5381
        for i in range(len(table_key)):
            hash = (hash * 33) + ord(table_key[i])
        return hash % 1013
    
    # Método hash_code
    def hash_code(self, key):
        return self.djb2_hash_code(key)
    
    # Método put
    def put(self, key, value):
        if key and value is not None:
            position = self.hash_code(key)
            table = self.get_table()
            if position not in table:
                self.set_table(position, ValuePair(key, value))
            else:
                index = position + 1
                while index in table:
                    index += 1
                self.set_table(index, ValuePair(key, value))
            return True
        return False
    
    # Método get
    def get(self, key):
        position = self.hash_code(key)
        table = self.get_table()
        if position in table:
            if table.get(position).key == key:
                return table.get(position).value
            index = position + 1
            while table.get(index) is not None and table.get(index).key != key:
                index += 1
            if table.get(index) is not None and table.get(index).key == key:
                return table.get(index).value
        return None

    # Método remove
    def remove(self, key):
        position = self.hash_code(key)
        table = self.get_table()
        if position in table:
            if table.get(position).key == key:
                del table[position]
                print(self.verify_remove_side_effect(key, position))
                return True
            index = position + 1
            while index in table and table.get(index).key != key:
                index += 1
            if index in table and table.get(index).key == key:
                del table.get[index]
                self.verify_remove_side_effect(key, index)
                return True
        return False
    
    # Método verify_remove_side_effect
    def verify_remove_side_effect(self, key, removed_position):
        hash = self.hash_code(key)
        index = removed_position + 1
        table = self.get_table()
        while index in table:
            pos_hash = self.hash_code(table.get(index).key)
            if pos_hash <= hash or pos_hash <= removed_position:
                table[removed_position] = table[index]
                del table[index]
                removed_position = index
            index += 1

    # Método is_empty
    def is_empty(self):
        return self.size() == 0
    
    # Método size
    def size(self):
        return len(self.get_table())
    
    # Método clear
    def clear(self):
        self.__table = {}

    #Método to_string
    def to_string(self):
        if self.is_empty():
            return ""
        table = self.get_table()
        keys = list(table.keys())
        obj_string = f"{{{keys[0]} => {table[keys[0]].__str__()}}}"
        for i in range(1, len(keys)):
            obj_string = f"{obj_string}, {{{keys[i]} => {table[keys[i]].__str__()}}}"
        return obj_string

# Criação da instância da tabela hash
hashTable = HashTableLinearProbing()

# Adicionando pares chave-valor
hashTable.put('Ygritte', 'Ygrittef@email.com')
hashTable.put('Jonathan', 'Jonathan@email.com')
hashTable.put('Jamie', 'Jamie@email.com')
hashTable.put('Jack', 'Jack@email.com')
hashTable.put('Jasmine', 'Jasmine@email.com')
hashTable.put('Jake', 'Jake@email.com')
hashTable.put('Nathan', 'Nathan@email.com')
hashTable.put('Athelstan', 'Athelstan@email.com')
hashTable.put('Sue', 'Sue@email.com')
hashTable.put('Aethelwulf', 'Aethelwulf@email.com')
hashTable.put('Sargeras', 'Sargeras@email.com')

# Recuperando valores
print(hashTable.get('Ygritte')) # Output: Ygrittef@email.com
print(hashTable.get('Jonathan')) # Output: Jonathan@email.com
print(hashTable.get('Jamie')) # Output: Jamie@email.com
print(hashTable.get('Jake')) # Output: Jake@email.com
print(hashTable.get('Gandalf')) # Output: None

# Removendo valores
print(hashTable.remove('Jonathan')) # Output: true
print(hashTable.get('Jonathan')) # Output: None

# Exibindo o conteúdo da tabela hash
print(hashTable.to_string())

# Limpando a tabela hash
hashTable.clear()
print(hashTable.is_empty()) # Output: true
print(hashTable.size()) # Output: 0