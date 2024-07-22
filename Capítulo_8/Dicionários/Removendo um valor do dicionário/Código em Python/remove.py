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

    # remove(key): esse método remove value do dicionário usando key como o parâmetro de busca.
    def remove(self, key):
        if self.has_key(key):
            del self.table[self.to_str_fn(key)]
            return True
        return False
