class Set:
    def __init__(self):
        self.items = {}

    # delete(element): remove element do conjunto.
    def delete(self, element):
        if self.items.has(element):
            del self.items[element]
            return True
        return False
    