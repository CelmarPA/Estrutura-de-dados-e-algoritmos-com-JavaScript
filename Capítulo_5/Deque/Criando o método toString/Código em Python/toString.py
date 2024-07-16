class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def to_string(self):
        if (self.is_empty()):
            return ""
        obj_string = f"{self.items[self.lowest_count]}"
        for i in range(self.lowest_count + 1, self.count):
            obj_string = f"{obj_string}, {self.items[i]}"

        return obj_string
