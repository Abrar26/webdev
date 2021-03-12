with open("txt2.txt","w") as f:
    for i in range(1,21):
        for j in range(1,11):
            f.write(f"{i}x{j}={i*j}\n")    
            
        f.write("\n")