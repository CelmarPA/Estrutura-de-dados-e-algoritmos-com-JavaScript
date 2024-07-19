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

set = Set()
set.add(1)
print(set.values()) # [1]
print(set.has(1)) # True
print(set.size()) # 1
set.add(2)
print(set.values()) # [1, 2]
print(set.has(2)) # True
print(set.size()) # 2
set.delete(1)
print(set.values()) # [2]
set.delete(2)
print(set.size()) # 0
print(set.values()) # exibe []
set.add(1)
set.add(2)
set.add(3)
set.add(4)
print(set.values()) # [1, 2, 3, 4]
print(set.size()) # 4
set.clear()
print(set.size()) # 0