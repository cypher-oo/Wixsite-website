# Write your code here :=)
import random
print("Hello reader")

readername = input("What is your name? ")

print("Hello " + readername)

names = ["Zara", "Ben", "Esme"]
places = ["India", "Egypt","America"]
quests = ["Seek the holy grail", "return the ring"]
roles = ["knight", "Amazon warrior", "witch"]

randomname = random.choice(names)
randomplaces = random.choice(places)
randomquests = random.choice(quests)
randomrole = random.choice(roles)

story = "Once upon a time there was a " + randomrole + " called " + randomname + "."

print(story)
