class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, element):
        self.items.append(element)
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)
    
    def pop(self):
        if not (self.is_empty()):
            return self.items.pop()
        else: 
            return None
    
    def peek(self):
        if not (self.is_empty()):
            return self.items[-1]
        else:
            return None
    
    def clear(self):
        self.items = []

stack = Stack()

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

stack.clear()
print(stack.is_empty()) # True