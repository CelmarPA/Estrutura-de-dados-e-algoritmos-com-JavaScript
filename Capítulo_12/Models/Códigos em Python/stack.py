class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}

    def push(self, element):
        self.items[self.count] = element
        self.count += 1
    
    def size(self):
        return len(self.items)
    
    def is_empty(self):
        return len(self.items) == 0
    
    def pop(self):
        if self.is_empty():
            return None
        self.count -= 1
        result = self.items[self.count]
        del self.items[self.count]
        return result
    
    def peek(self):
        if not (self.is_empty()):
            return self.items[self.count - 1]
        else:
            return None
    
    def clear(self):
        self.count = 0
        self.items = {}

    def to_string(self):
        if self.is_empty():
            return ""
        objString = f"{self.items[0]}"
        for i in range(1, self.count):
            objString = f"{objString}, {self.items[i]}"
        return objString
