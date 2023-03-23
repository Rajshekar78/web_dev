Platform = input("Enter the name of platform:")
Email_phone = input("What email/phone did you used their?:")
Username = input("Enter Username you user their:")
Password = input("Enter your password:")

if __name__ == "__main__":

    file = open(Platform +".txt","a")
    file.write("Email/Phone: "+ Platform + "\n")
    file.write("Username: "+ Username + "\n")
    file.write("Password: "+ Password + "\n")
    file.write("\n")
