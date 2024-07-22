def defaultToString(item):
    if item is None:
        return "NONE"
    elif isinstance(item, str):
        return f"{item}"
    return str(item)

class ValuePair:
    def __init__(self, key, value):
        self.key = key
        self.value = value
    
    def __str__(self):
        return f"[#{self.key}: {self.value}]"

class Dictionary:
    def __init__(self, to_str_fn=defaultToString):
        self.to_str_fn = to_str_fn
        self.__table = {}

    def get_table(self):
        return self.__table

    def set_table(self, key, item):
        self.__table[key] = item
    
    def has_key(self, key):
        return self.to_str_fn(key) in self.get_table()
    
    def set(self, key, value):
        if key is not None and value is not None:
            table_key = self.to_str_fn(key)
            self.set_table(table_key, ValuePair(key, value))
            return True
        return False
    
    def remove(self, key):
        table_key = self.to_str_fn(key)
        if table_key in self.get_table():
            del self.get_table()[table_key]
            return True
        return False
    
    def get(self, key):
        value_pair = self.get_table().get(self.to_str_fn(key))
        return None if value_pair is None else value_pair.value
    
    def get1(self, key):
        return self.get_table().get(self.to_str_fn(key))
    
    def key_values(self):
        return [{'key': pair.key, 'value': pair.value} for pair in self.get_table().values()]
    
    def key_values1(self):
        return [self.get_table().get(k) for k in self.get_table() if self.has_key(k)]
    
    def keys(self):
        return [pair.key for pair in self.get_table().values()]
    
    def keys1(self):
        return [pair.key for pair in self.key_values()]
    
    def values(self):
        return [pair.value for pair in self.get_table().values()]
    
    def for_each(self, callback_fn):
        for pair in self.get_table().values():
            result = callback_fn(pair.key, pair.value)
            if not result:
                break

    def size(self):
        return len(self.get_table())
    
    def is_empty(self):
        return self.size() == 0
    
    def clear(self):
        self.__table = {}
    
    def to_string(self):
        if self.is_empty():
            return ""
        return ", ".join(str(pair) for pair in self.get_table().values())
    
# Exemplo de uso
dictionary = Dictionary()
dictionary.set('Gandalf', 'gandalf@email.com')
dictionary.set('John', 'johnsnow@email.com')
dictionary.set('Tyrion', 'tyrion@email.com')

print(dictionary.has_key('Gandalf'))  # True
print(dictionary.size())  # 3
print(dictionary.keys())  # ['Gandalf', 'John', 'Tyrion']
print(dictionary.values())  # ['gandalf@email.com', 'johnsnow@email.com', 'tyrion@email.com']
print(dictionary.get('Tyrion'))  # tyrion@email.com

dictionary.remove('John')
print(dictionary.keys())  # ['Gandalf', 'Tyrion']
print(dictionary.values())  # ['gandalf@email.com', 'tyrion@email.com']
print(dictionary.key_values())  # [{'key': 'Gandalf', 'value': 'gandalf@email.com'}, {'key': 'Tyrion', 'value': 'tyrion@email.com'}]
