class Queue:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def dequeue(self):
        if self.isEmpty():
            return None
        result = self.items[self.lowest_count]
        del self.items[self.lowest_count]
        self.lowest_count += 1
        return result
