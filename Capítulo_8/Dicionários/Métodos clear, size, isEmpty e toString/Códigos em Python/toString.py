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
    
    # Método to_string:
    def __str__(self):
        if self.is_empty():
            return ""
        value_pairs = self.key_values()
        obj_string = f"{str(value_pairs[0])}"
        for i in range(1, len(value_pairs)):
            obj_string = f"{obj_string}, {str(value_pairs[i])}"
        return obj_string
