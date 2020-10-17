from tkinter import *

class Application(object):
    def __init__(self,master):
         self.master = master



        

def main():
    root = Tk()
    app = Application(root)
    root.title("PhoneBook App")
    root.geometry("650*550+350+200")
    root.resizable(False, False)
    root.mainlogo()


if __name__ == '__main__':
    main()
