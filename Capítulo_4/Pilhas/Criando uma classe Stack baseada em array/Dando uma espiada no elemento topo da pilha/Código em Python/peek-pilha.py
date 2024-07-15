class Stack:
    def __init__(self):
        self.items = []

    def peek(self):
        if not (self.is_empty()):
            return self.items[-1]
        else:
            return None
        