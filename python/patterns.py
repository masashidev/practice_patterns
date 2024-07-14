# variable examples

# 1. variable assignment
a = 10
b = 20
c = a + b

# 2. variable reassignment
a = 30
b = 40
c = a + b

# 3. variable assignment with a function
def add(a, b):
    return a + b

c = add(50, 60)

# 4. variable assignment with a lambda function
add = lambda a, b: a + b
c = add(70, 80)

# 5. variable assignment with a list
numbers = [1, 2, 3, 4, 5]
c = sum(numbers)

# 6. variable assignment with a dictionary
person = {
    'name': 'Alice',
    'age': 30
}
c = person['age']

# 7. variable assignment with a tuple
person = ('Alice', 30)
c = person[1]

# 8. variable assignment with a set
numbers = {1, 2, 3, 4, 5}
c = sum(numbers)

# 9. variable assignment with a string
name = 'Alice'
c = len(name)

# 10. variable assignment with a boolean
is_adult = True
c = is_adult

# 11. variable assignment with a None
nothing = None
c = nothing

# 12. variable assignment with a module
import math
c = math.pi

# 13. variable assignment with a class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

person = Person('Alice', 30)
c = person.age

def main():
    print(c)

if __name__ == '__main__':
    main()

for i in range(10):
    print(i)

while True:
    break

try:
    raise Exception('An error occurred')
except Exception as e:
    print(e)

with open('file.txt', 'r') as file:
    for line in file:
        print(line)

def take_input():
    return input('Enter a number: ')

input = take_input()
print(input)

array[0] = 1
print(array[0])

#for loop types
for i in range(10):
    print(i)

for i in range(10, 20):
    print(i)

for i in range(10, 20, 2):
    print(i)

#array length
length = len(array)
print(length)



############################################

num = int(input("Enter a number: "))

# list
# list from 0 to num
numbers = list(range(num))
#list of even numbers
even_numbers = list(range(0, num, 2))
#list of alphabetic characters
alphabets = list('abcdefghijklmnopqrstuvwxyz')
#list of names
names = ["Alice", "Bob", "Charlie"]
# mapping list
squared_numbers = list(map(lambda x: x ** 2, numbers))
#filtering list
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
#reducing list
sum_of_numbers = reduce(lambda x, y: x + y, numbers)


# loop
count = 0
while count < num:
    print(count)
    count += 1

for i in range(num):
    print(i)

dict = {} # empty dictionary
for index, value in enumerate(numbers):
    dict[index] = value


# if statement

if num > 0:
    print("Positive number")
elif num == 0:
    print("Zero")
else:
    print("Negative number")

#function

def getRankInArray(existingArray, newNum):
    existingArray.append(newNum)
    existingArray.sort()
    return existingArray.index(newNum)
