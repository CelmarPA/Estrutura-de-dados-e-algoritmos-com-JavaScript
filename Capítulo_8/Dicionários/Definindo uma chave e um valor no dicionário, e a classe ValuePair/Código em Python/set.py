# defaultToString:
def defaultToString(item):
    if item is None:
        return "NONE"
    elif isinstance(item, str):
        return f"{item}"
    return str(item)

# Classe Value Pair
class ValuePair:
    def __init__(self, key, value):
        self.key = key
        self.value = value
    
    def toString(self):
        return f"[#{self.key}: {self.value}]"

# Classe Dictionary
class Dictionary:
    def __init__(self, to_str_fn = defaultToString):
        self.to_str_fn = to_str_fn
        self.table = {}

# set(key, value): esse método adiciona um novo elemento ao dicionário. Se key já existir, seu valor será sobrescrito com o novo valor.
    def set(self, key, value):
        if (key and value is not None):
            table_key = self.to_str_fn(key)
            self.table[table_key, ValuePair(key, value)]
            return True
        return False
