from tkinter import *


def run():
    name1 = name_storage.get()
    print(name1)
    name.


screen =  Tk()
screen.title("My first graphics progran")
screen.geometry("500x500")

welcome_text = Label(text = "Welcome to our first graphcs program", fg = "black", bg = "blue")
welcome_text.pack()

click_me = Button(text = "Click me", fg = "black",bg = "blue")
click_me.place(x = 10, y = 20)

name_storage = StringVar()
name = Entry(textvariable = name_storage)
name.pack()
screen.mainloop()
