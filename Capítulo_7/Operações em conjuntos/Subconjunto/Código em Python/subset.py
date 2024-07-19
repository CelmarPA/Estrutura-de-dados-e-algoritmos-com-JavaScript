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
    
# Subconjunto: confirma se um dado conjunto é um subconjunto de outro.
class Subset(Set):
    def __init__(self):
        super().__init__()

    def is_subset_of(self, other_set):
        if (self.size() > other_set.size()):
            return False
        
        values = self.values()
        is_subset = True
        for value in values:
            if not other_set.has(value):
                is_subset = False
                return False
            return True
        return is_subset
    
setA = Subset()
setA.add(1)
setA.add(2)
setB = Subset()
setB.add(1)
setB.add(2)
setB.add(3)
setC = Subset()
setC.add(2)
setC.add(3)
setC.add(4)
print(setA.is_subset_of(setB)) # True
print(setA.is_subset_of(setC)) # False
