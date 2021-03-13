class Employee():
    #Contructor Example
    def __init__(self):
        print("Constructor is created")
    
    #Self object Example
    def getInformation(self):
        print(f"{self.name} is a student of {self.clg} and age of the student is {self.age}.")
        
Abrar=Employee()
Abrar.name="Abrar Ahmed"
Abrar.age=20
Abrar.clg="CAHCET"
Abrar.getInformation()