import os, time,

employee = {"1123":"Jozef Petras","1124":"Rastislav Guláš","1125":"Mária Surová", "1126":"Júlia Kocáková"}
def looking_name():
    x = input("Zadaj cislo ID > ")
    if x in employee:
        return employee[x]
    else:
        return "ID číslo sa nenachádza v zozname!!!"
    
def adding_name():
    y = input("Zadaj ID cislo > ")
    z = input("Zadaj zamestnanca > ")  
    if y in employee:
        return "ID je už vytvorené!!!"
    else:    
        u = employee[y] = z 
        return u

  


while True:
    time.sleep(2)
    os.system('cls' if os.name == 'nt' else 'clear')
    menu = input(("1. View \n2. Add\n>"))
    if menu == "1":
        print(looking_name())
    elif menu == "2":
        print(adding_name())  
    else:
        print("Vyber si z ponuky 1 - View alebo 2 - Add")  


tk.mainloop()          
tk = "string"   
"""
import pymysql as mys

connection = mys.connect (
     host= "mysql80.r4.websupport.sk",
     port = int("3314"),
     database = "conti_personnel",
     user = "conti_rosko00",
     password = "0F85f9ECCAC447d0"
)
print (f"Som pripojený na MySQL s verziou: {connection.server_version}")
"""
        
    


    

    

