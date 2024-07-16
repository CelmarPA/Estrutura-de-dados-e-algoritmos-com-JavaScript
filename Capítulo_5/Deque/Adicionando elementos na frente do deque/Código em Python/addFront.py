class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def addFront(self, element):
        if (self.is_empty()): # Se deque vazio
            self.addBack(element) # call addBack para adicionar
        elif (self.lowest_count > 0): # Se lowest_count > 0
            self.lowest_count -= 1 # Decrementa lowest_count
            self.items[self.lowest_count] = element #  Adiciona o elemento
        else: # Se lowest_count é igual a 0
            for i in range(self.count, 0, -1): # começamos a iterar pelos valores existentes na propriedade items a partir de seu último índice
                self.items[i] = self.items[i - 1] # atribuindo-lhe o elemento que está em index - 1.

            self.count += 1
            self.lowest_count = 0
            self.items[0] = element
        

