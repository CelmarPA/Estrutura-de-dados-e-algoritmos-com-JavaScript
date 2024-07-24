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
        self.table = {}

    # Método loseloseHashCode
    def loselose_hash_code(self, key):
        if isinstance(key, (int, float)):
            return key
        table_key = self.to_str_fn(key)
        hash = 0
        for i in range(len(table_key)):
            hash += ord(table_key[i])
        return hash % 37
    
    # Método hash_code
    def has_code(self, key):
        return self.loselose_hash_code(key)
    
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
