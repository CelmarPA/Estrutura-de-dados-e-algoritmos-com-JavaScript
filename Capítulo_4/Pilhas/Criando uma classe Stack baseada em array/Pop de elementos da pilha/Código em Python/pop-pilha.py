class Stack:
    def __init__(self):
        self.items = []

    def pop(self):
        if not (self.is_empty()):
            return self.items.pop()
        else:
            return None
