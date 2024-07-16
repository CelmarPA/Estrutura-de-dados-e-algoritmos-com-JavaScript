# removeFront(): esse método remove o primeiro elemento do deque.
class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}
    
    def removeFront(self):
        if (self.is_empty()):
            return None
        result = self.items[self.lowest_count]
        del self.items[self.lowest_count]
        self.lowest_count += 1
        return result
    