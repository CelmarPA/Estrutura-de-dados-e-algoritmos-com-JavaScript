# removeBack(): esse método remove o último elemento do deque.
class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def removeBack(self):
        if (self.is_empty()):
            return None
        self.count -= 1
        result = self.items[self.count]
        del self.items[self.count]
        return result
    