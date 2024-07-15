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

stack = Stack()
print(stack.is_empty()) # True

stack.push(5)
stack.push(8)

print(stack.peek()) # 8

stack.push(11)
print(stack.size()) # 3
print(stack.is_empty()) # False

stack.push(15)

stack.pop()
stack.pop()
print(stack.size()) # 2

print(stack.to_string()) # 5, 8

stack.clear()
print(stack.is_empty()) # True
