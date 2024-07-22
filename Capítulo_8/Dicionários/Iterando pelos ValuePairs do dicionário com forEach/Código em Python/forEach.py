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

    # forEach(callBackFn): esse método itera pelos valores (value) do dicionário. A função callbackFn tem dois parâmetros: key e value. Esse método também pode ser interrompido caso a função de callback devolva false.
    def for_each(self, callback_fn):
        for pair in self.table.values():
            result = callback_fn(pair.key, pair.value)
            if (result is False):
                break
