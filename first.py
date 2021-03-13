import random
class Train:
    def __init__(self,name,fare,seats):
        self.name=name
        self.fare=fare
        self.seats=seats
        
    def getStatus(self):
        print(f"The name of the train is {self.name}")
        print(f"The seats available in the train are {random.randint(0,self.seats)}")

lalbagh= Train("LALBAGH",60,300)
lalbagh.getStatus()
