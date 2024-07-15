class Stack:
    def __init__(self):
        self.count = 0
        self.items = {}

    def to_string(self):
        if (self.is_empty()):
            return ""
        objString = f"{self.items[0]}"
        for i in range(1, self.count):
            objString = f"{objString},{self.items[i]}"
        return objString
