class Set:
    def __init__(self):
        self.__items = {}

    # Método getter para __items
    def get_items(self):
        return self.__items
    
    # Método setter para __items
    def set_items(self, item):
        self.__items[item] = item

    # Método has(element): devolve true se element estiver no conjunto, e false caso contrário.
    def has(self, element):
        return element in self.get_items()
    
    # add(element): adiciona um novo element ao conjunto.
    def add(self, element):
        if not self.has(element):
            self.set_items(element)
            return True
        return False
    
    # Método delete(element): remove element do conjunto.
    def delete(self, element):
        if self.has(element):
            del self.get_items()[element]
            return True
        return False
    
    # Método clear(): remove todos os elementos do conjunto.
    def clear(self):
        self.__items = {}

    # Método size(): devolve quantos elementos estão contidos no conjunto. É semelhante à propriedade length de um array.
    def size(self):
        count = 0
        for key in self.get_items():
            if self.has(key):
                count += 1
        return count
    
    # Método values(): devolve um array com todos os valores (elementos) que estão no conjunto.
    def values(self):
        values= []
        for key in self.get_items():
            if self.has(key):
                values.append(self.get_items()[key])
        return values

# Diferença: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo.
class SetDifference(Set):
    def __init__(self):
        super().__init__()

    def difference(self, other_set):
        difference_set = Set()
        values = self.values()
        for i in range(len(values)):
            if not other_set.has(values[i]):
                difference_set.add(values[i])
        return difference_set
    

setA = SetDifference()
setA.add(1)
setA.add(2)
setA.add(3)

setB = SetDifference()
setB.add(2)
setB.add(3)
setB.add(4)


differenceAB = setA.difference(setB)
differenceBA = setB.difference(setA)

print(differenceAB.values()) # [ 1 ] 
print(differenceBA.values()) # [ 4 ]