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
