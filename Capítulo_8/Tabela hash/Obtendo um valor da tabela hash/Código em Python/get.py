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
        self.to_srt_fh = to_str_fn
        self.table = {}
    
    # get(key): esse método devolve um value específico encontrado com key.
    def get(self, key):
        hash = self.hash_code(key)
        table = self.table
        if hash in table:
            value_pair = table[hash]
            return None if value_pair is None else value_pair.value
        return None
