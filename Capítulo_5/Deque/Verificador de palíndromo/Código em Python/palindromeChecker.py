# Classe Deque
class Deque:
    def __init__(self):
        self.count = 0
        self.lowest_count = 0
        self.items = {}

    def addFront(self, element):
        if (self.is_empty()):
            self.addBack(element)
        elif (self.lowest_count > 0):
            self.lowest_count -= 1
            self.items[self.lowest_count] = element
        else:
            for i in range(self.count, 0 , -1):
                self.items[i] = self.items[i - 1]

            self.count += 1
            self.lowest_count = 0
            self.items[0] = element
        
    def addBack(self, element):
        self.items[self.count] = element
        self.count += 1

    def removeFront(self):
        if (self.is_empty()):
            return None
        result = self.items[self.lowest_count]
        del self.items[self.lowest_count]
        self.lowest_count += 1
        return result
    
    def removeBack(self):
        if (self.is_empty()):
            return None
        self.count -= 1
        result = self.items[self.count]
        del self.items[self.count]
        return result

    def peekFront(self):
        if (self.is_empty()):
            return None
        return self.items[self.lowest_count]
    
    def peekBack(self):
        if (self.is_empty()):
            return None
        return self.items[self.count]
    
    def size(self):
        return self.count - self.lowest_count
    
    def is_empty(self):
        return self.size() == 0
    
    def clear(self):
        self.items = {}
        self.count = 0
        self.lowest_count = 0
    
    def to_string(self):
        if (self.is_empty()):
            return ""
        obj_string = f"{self.items[self.lowest_count]}"
        for i in range(self.lowest_count + 1, self.count):
            obj_string = f"{obj_string}, {self.items[i]}"
        return obj_string
    
# Um palíndromo é uma palavra, frase, número ou outra sequência de caracteres que é lido igualmente de trás para frente ou de frente para trás, por exemplo, madam ou racecar.

#  O algoritmo a seguir utiliza um deque para solucionar esse problema:

def palindrome_checker(a_string):
    if a_string is None or a_string == "" or len(a_string) == 0: # Verifica se a string é válida
        return False
    
    deque = Deque() # Utiliza a classe Deque
    lower_string = "".join(a_string.lower().split(" ")) # Transforma todas as letras em minúsculas e remove também todos os espaços
    isEqual = True

    for i in range(0, len(lower_string)): # Inseri todos os caracteres da string no deque
        deque.addBack(lower_string[i])
    
    # Enquanto tivermos elementos no deque (se restar apenas um caractere, será um palíndromo) e a string for um palíndromo
    while (deque.size() > 1 and isEqual):
        first_char = deque.removeFront() #  removemos um elemento da frente
        last_char = deque.removeBack() # removemos um elemento de trás

        # Se os caracteres não coincidirem, a string não será um palíndromo
        if (first_char != last_char):
            isEqual = False

    return isEqual

# Podemos usar o código a seguir para testar o algoritmo palindromeChecker:
print("a", palindrome_checker("a"))
print("aa", palindrome_checker("aa"))
print("kayak", palindrome_checker("kayak"))
print("level", palindrome_checker("level"))
print("Was it a car or a cat I saw", palindrome_checker("Was it a car or a cat I saw"))
print("Step on no pets", palindrome_checker("Step on no pets"))
