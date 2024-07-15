class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}

    def peek(self):
        if not (self.is_empty()):
            return self.items[self.count - 1]
        else:
            return None
    
    def clear(self):
        self.count = 0
        self.items = {}
