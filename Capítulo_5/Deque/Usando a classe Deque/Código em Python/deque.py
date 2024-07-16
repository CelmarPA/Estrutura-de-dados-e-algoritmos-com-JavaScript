class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def addFront(self, element):
        if (self.is_empty()):
            self.addBack(element)
        elif (self.lowest_count > 0):
            self.lowest_count -= 1
            self.items[self.lowest_count] = element
        else:
            for i in range(self.count, 0 , -1):
                self.items[i] = self.items[i - 1]

            self.count += 1
            self.lowest_count = 0
            self.items[0] = element
        
    def addBack(self, element):
        self.items[self.count] = element
        self.count += 1

    def removeFront(self):
        if (self.is_empty()):
            return None
        result = self.items[self.lowest_count]
        del self.items[self.lowest_count]
        self.lowest_count += 1
        return result
    
    def removeBack(self):
        if (self.is_empty()):
            return None
        self.count -= 1
        result = self.items[self.count]
        del self.items[self.count]
        return result

    def peekFront(self):
        if (self.is_empty()):
            return None
        return self.items[self.lowest_count]
    
    def peekBack(self):
        if (self.is_empty()):
            return None
        return self.items[self.count]
    
    def size(self):
        return self.count - self.lowest_count
    
    def is_empty(self):
        return self.size() == 0
    
    def clear(self):
        self.items = {}
        self.count = 0
        self.lowest_count = 0
    
    def to_string(self):
        if (self.is_empty()):
            return ""
        obj_string = f"{self.items[self.lowest_count]}"
        for i in range(self.lowest_count + 1, self.count):
            obj_string = f"{obj_string}, {self.items[i]}"
        return obj_string
    
deque = Deque()
print(deque.is_empty()) # True

deque.addBack("John")
deque.addBack("Jack")
print(deque.to_string()) # John, Jack

deque.addBack("Camila")
print(deque.to_string()) # John, Jack, Camila
print(deque.size()) # 3
print(deque.is_empty()) # False
deque.removeFront() # remove John
print(deque.to_string()) # Jack, Camila
deque.removeBack() # Camila decide sair
print(deque.to_string()) # Jack
deque.addFront("John") # John retorna para pedir uma informação
print(deque.to_string()) # John, Jack

deque.clear()
print(deque.is_empty()) # True