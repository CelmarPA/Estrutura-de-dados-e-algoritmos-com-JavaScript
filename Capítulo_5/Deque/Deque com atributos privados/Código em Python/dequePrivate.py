class Deque:
    def __init__(self):
        self.__count = 0
        self.__lowest_count = 0
        self.__items = {}

    def addFront(self, element):
        if (self.is_empty()):
            self.addBack(element)
        elif (self.__lowest_count > 0):
            self.__lowest_count -= 1
            self.__items[self.__lowest_count] = element
        else:
            for i in range(self.__count, 0 , -1):
                self.__items[i] = self.__items[i - 1]

            self.__count += 1
            self.__lowest_count = 0
            self.__items[0] = element
        
    def addBack(self, element):
        self.__items[self.__count] = element
        self.__count += 1

    def removeFront(self):
        if (self.is_empty()):
            return None
        result = self.__items[self.__lowest_count]
        del self.__items[self.__lowest_count]
        self.__lowest_count += 1
        return result
    
    def removeBack(self):
        if (self.is_empty()):
            return None
        self.__count -= 1
        result = self.__items[self.__count]
        del self.__items[self.__count]
        return result

    def peekFront(self):
        if (self.is_empty()):
            return None
        return self.__items[self.__lowest_count]
    
    def peekBack(self):
        if (self.is_empty()):
            return None
        return self.__items[self.__count]
    
    def size(self):
        return self.__count - self.__lowest_count
    
    def is_empty(self):
        return self.size() == 0
    
    def clear(self):
        self.__items = {}
        self.__count = 0
        self.__lowest_count = 0
    
    def to_string(self):
        if (self.is_empty()):
            return ""
        obj_string = f"{self.__items[self.__lowest_count]}"
        for i in range(self.__lowest_count + 1, self.__count):
            obj_string = f"{obj_string}, {self.__items[i]}"
        return obj_string
