import random

lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
number = "0123456789"
symbol = "[]{}!@$%^&*()_-"

all = lower + upper + number + symbol
length = 6
password = "".join(random.sample(all, length))
print("The password you generated is: ",password)
