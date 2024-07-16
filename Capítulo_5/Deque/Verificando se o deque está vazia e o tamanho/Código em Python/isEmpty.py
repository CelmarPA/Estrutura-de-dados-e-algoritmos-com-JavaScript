# isEmpty(): esse método devolve true se o deque não contiver nenhum elemento, e false se o tamanho for maior que 0.

# size(): esse método devolve o número de elementos contidos no deque. É semelhante à propriedade length do array.

class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def is_empty(self):
        return self.size() == 0
    
    def size(self):
        return self.count - self.lowest_count
