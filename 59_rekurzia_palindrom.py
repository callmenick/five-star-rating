word = input("Myslíš si , že je dané slovo palindrom? Zadaj slovo > ")
def palindrome(word):
  if len(word)<=1:
    return True
  elif word[0] != word[-1]:
    return False
  return palindrome(word[1:-1])  
  


print(palindrome(word))
print(word[1:-1])
"""
value = int(input("Vloz cislo > "))
def func(value):
  if value == 1:
    return 1
  else:  
    return value * func(value-1)
print(func(value))
"""
word = input("Myslíš si , že je dané slovo palindrom? Zadaj slovo > ")
def palindrome(word):
  if len(word)<=1:
    return True
  elif word[0] != word[-1]:
    return False
  return palindrome(word[1:-1])  
  


print(palindrome(word))
print(word[1:-1])
"""
value = int(input("Vloz cislo > "))
def func(value):
  if value == 1:
    return 1
  else:  
    return value * func(value-1)
print(func(value))
"""
