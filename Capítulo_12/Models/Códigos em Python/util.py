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

# Variável Colors
Colors = {
    "WHITE": 0,
    "GREY": 1,
    "BLACK": 2
}

# Função initialize_color
def initialize_color(vertices):
    color = {}
    for i in range(len(vertices)):
        color[vertices[i]] = Colors["WHITE"]
    return color
