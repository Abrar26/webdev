import random
rd=random.randint(1,10)

class Game:
    count=1
    def __init__(self,rd):
        self.rdn=rd
    def guess(self,val):
        bools=True
        while(bools):
            if(val==self.rdn):
                print(f"FU*K YOU GUESSED CORRECT After the {self.count} guess")
                break
            elif (val>self.rdn):
                print(r"LOL! YOUR NUMBER IS TOO HIGH :)")
                self.count+=1
            else:
                print("LOL! YOUR NUMBER IS TOO LOW :)")
                self.count+=1
            
            val=int(input("Guess again: "))
            
        

gm=Game(rd)
n=int(input("Guess the Number: "))
op=gm.guess(n)
with open("txt2.txt","r") as f:
    hs=(f.readline())
    if(int(hs)>gm.count):
        with open("txt2.txt","w") as f:
            print("YOU HAVE BROKEN THE HIGH_SCORE")
            f.write(f"{gm.count}")
    