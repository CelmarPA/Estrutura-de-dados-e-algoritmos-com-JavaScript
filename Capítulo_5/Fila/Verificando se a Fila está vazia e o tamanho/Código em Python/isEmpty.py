class Queue:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def is_empty(self):
        return self.count - self.lowest_count == 0
    
    def size(self):
        return self.count - self.lowest_count
    