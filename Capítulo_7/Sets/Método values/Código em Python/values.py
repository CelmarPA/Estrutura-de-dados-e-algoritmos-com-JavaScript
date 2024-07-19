class Set:
    def __init__(self):
        self.items = {}
    
    # values(): devolve um array com todos os valores (elementos) que estão no conjunto.
    def values_in(self):
        return list(self.items.values())
    
    def values_in2(self):
        values = []
        for key in self.items:
            if self.has(key):
                values.append(self.items[key])
        return values
