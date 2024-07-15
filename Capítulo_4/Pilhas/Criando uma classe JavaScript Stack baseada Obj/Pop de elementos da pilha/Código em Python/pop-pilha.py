class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}

    def pop(self):
        if (self.count <= 0):
            return None
        self.count -= 1
        result = self.items[self.count]
        del self.items[self.count]
        return result
