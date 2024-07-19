class Set:
    def __init__(self):
        self.items = {}

    # has(element): devolve true se element estiver no conjunto, e false caso contrário.
    def has(self, element):
        return element in self.items