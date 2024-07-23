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

    # get(key): esse método devolve um value específico do dicionário usando key como o parâmetro de busca.
    def get(self, key):
        value_pair = self.table[self.to_str_fn(key)]
        return None if value_pair is None else value_pair.value
    
    # Segunda opção do método get:
    def get1(self, key):
        if self.has_key(key):
            return self.table[self.to_str_fn(key)]
        return None
