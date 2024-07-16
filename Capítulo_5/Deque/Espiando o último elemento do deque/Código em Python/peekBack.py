class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def peekBack(self):
        if (self.is_empty()):
            return None
        return self.items[self.count - 1]