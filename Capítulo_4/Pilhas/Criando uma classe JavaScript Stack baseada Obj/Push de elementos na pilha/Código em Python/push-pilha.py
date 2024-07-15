class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}
    
    def push(self, element):
        self.items[self.count] = element
        self.count += 1

stack = Stack()
stack.push(5)
stack.push(8)

print(stack.items)
print(stack.count)