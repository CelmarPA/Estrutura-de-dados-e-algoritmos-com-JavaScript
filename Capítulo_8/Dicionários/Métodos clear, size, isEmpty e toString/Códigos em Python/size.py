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

    # size(): esse método devolve a quantidade de valores contida no dicionário. É semelhante à propriedade length da classe Array.
    def size(self):
        return len(self.table)
    