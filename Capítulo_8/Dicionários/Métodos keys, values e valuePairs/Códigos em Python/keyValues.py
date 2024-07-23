# defaultToString:
def defaultToString(item):
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

# Classe Dictionary
class Dictionary:
    def __init__(self, to_str_fn = defaultToString):
        self.to_str_fn = to_str_fn
        self.table = {}

    # keyValues(): esse método devolve um array com todos os pares de valores [chave, valor] contidos no dicionário.
    def key_values(self):
        return [{"key": pair.key, "value": pair.value}  for pair in self.table.values()]
    
    # Outra implementação que pode ser usada é:
    def key_values1(self):
        value_pairs = []
        for  k in self.table:
            if self.has_key(k):
                value_pairs.append(self.table)[k]
        return value_pairs
