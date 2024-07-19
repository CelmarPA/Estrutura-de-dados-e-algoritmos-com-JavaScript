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
    
# Intersecção: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos.
class SetIntersection(Set):
    def __init__(self):
        super().__init__()

    def intersection(self, other_set):
        intersection_set = Set()
        values = self.values()
        other_values = other_set.values()
        bigger_set = values
        smaller_set = other_values
        if (len(other_values) - len(values)) > 0:
            bigger_set = other_values
            smaller_set = values
        for value in smaller_set:
            if value in bigger_set:
                intersection_set.add(value)
        return intersection_set
    
setA = SetIntersection()
setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)
setA.add(5)
setA.add(6)
setA.add(7)
print(setA.values()) # [1, 2, 3, 4, 5, 6, 7]

setB = SetIntersection()
setB.add(4)
setB.add(6)
print(setB.values()) # [4, 6]

intersectionAB = setA.intersection(setB)
print(intersectionAB.values()) # [4, 6]
