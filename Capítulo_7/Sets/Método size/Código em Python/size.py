class Set:
    def __init__(self):
        self.items = {}

    # size(): devolve quantos elementos estão contidos no conjunto. É semelhante à propriedade length de um array.
    def size(self):
        return len(self.items)
    
    def size2(self):
        count = 0
        for key in self.items:
            if self.has(key):
                count += 1
        return count
    
