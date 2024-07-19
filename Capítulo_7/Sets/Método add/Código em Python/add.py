class Set:
    def __init__(self):
        self.items = {}

    # add(element): adiciona um novo element ao conjunto.
    def add(self, element):
        if not self.has(element):
            self.items[element] = element
            return True
        return False
    
    