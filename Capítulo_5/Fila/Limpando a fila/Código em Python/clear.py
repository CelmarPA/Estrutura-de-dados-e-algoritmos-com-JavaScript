class Queue:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def clear(self):
        self.items = {}
        self.count = 0
        self.lowest_count= 0
