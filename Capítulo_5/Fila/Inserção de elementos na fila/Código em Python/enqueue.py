class Queue:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def enqueue(self, element):
        self.items[self.count] = element
        self.count += 1
