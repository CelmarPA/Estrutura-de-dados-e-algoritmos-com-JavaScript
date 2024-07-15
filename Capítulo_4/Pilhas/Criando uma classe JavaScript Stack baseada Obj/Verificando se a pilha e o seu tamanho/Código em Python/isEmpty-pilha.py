class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}
    
    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)
