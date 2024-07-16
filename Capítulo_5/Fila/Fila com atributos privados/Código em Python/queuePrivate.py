class Queue:
    def __init__(self):
        self.__count = 0
        self.__lowest_count = 0
        self.__items = {}

    def enqueue(self, element):
        self.__items[self.__count] = element
        self.__count += 1

    def dequeue(self):
        if (self.is_empty()):
            return None
        result = self.__items[self.__lowest_count]
        del self.__items[self.__lowest_count]
        self.__lowest_count += 1
        return result
    
    def peek(self):
        if (self.is_empty()):
            return None
        return self.__items[self.__lowest_count]
    
    def is_empty(self): 
        return self.__count - self.__lowest_count == 0
    
    def size(self):
        return self.__count - self.__lowest_count
    
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
