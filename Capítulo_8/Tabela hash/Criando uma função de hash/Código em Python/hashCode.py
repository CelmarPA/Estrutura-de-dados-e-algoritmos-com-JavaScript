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
    
    def loselose_hash_code(self, key):
        if isinstance(key, (int, float)):
            return key
        table_key = self.to_srt_fh(key)
        hash = 0
        for i in range(len(table_key)):
            hash = hash + ord(table_key[i]) # ord() obtém o código ASCII
        return hash % 37
        # Para trabalhar com números menores, devemos usar o resto da divisão (%) do número de hash utilizando um número arbitrário – isso evitará correr o risco de trabalhar com números grandes, que não caibam em uma variável numérica.

    def hash_code(self, key):
        return self.loselose_hash_code(key)
