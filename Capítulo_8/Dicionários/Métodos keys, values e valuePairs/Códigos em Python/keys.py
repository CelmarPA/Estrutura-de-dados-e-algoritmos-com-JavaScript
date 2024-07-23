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
    
    def __str__(self):
        return f"[#{self.key}: {self.value}]"

# Classe Dictionary
class Dictionary:
    def __init__(self, to_str_fn = defaultToString):
        self.to_str_fn = to_str_fn
        self.table = {}

    # keys(): esse método devolve um array com todas as chaves contidas no dicionário.
    def keys(self):
        return [pair.key for pair in self.table.values()]
    
    # A lógica usada no método keys também pode ser escrita assim:
    def keys1(self):
        keys = []
        value_pair = list(self.get_table().values())
        for i in range(len(value_pair)):
            keys.append(value_pair[i].key)
        return keys
