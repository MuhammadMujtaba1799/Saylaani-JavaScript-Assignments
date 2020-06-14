                CHAPTER#1 "ALERTS"

Q1)Write a script to greet your website visitor using JS alert box. 
            alert("Wellcome to Our Website")

Q2) Write a script to display following message on your web page:
            alert("Error! Please enter a valid password.")

Q3)  Write a script to display following message on your web page: (Hint : Use line break).
            alert("Welcome to JS Land..."+"\n"+"Happy Coding!")

Q4) Write a script to display following messages in sequence: 
            alert("Welcome to JS Land...")
            alert("Happy Coding!")

Q5)Generate the following message through browser’s developer console: 
            console.log(alert("Hello... I can run JS through my web brouser's console"))

 Q6) Make use of alerts in your new/existing HTML & CSS project. 
            check in index.html file

Q7) Practice placement of <script></script> element in following sections of your project in exercise 6: 
a. Head b. Body (before your page’s HTML) c. Body (inside your page’s HTML) d. Body (after your page’s HTML) 
            

                CHAPTER#2 "VARIABLES FOR STRING"
    
Q1)Declare a variable called username. 
            var username;
    
Q2) Declare a variable called myName & assign to it a string that represents your Full Name
            var myName="Muhammad Mujtaba";

Q3)Write script to 
a) Declare a JS variable, titled message. b) Assign “Hello World” to variable message c) Display the message in alert box. 
            var message;
            message="Hello World";
            alert(message)

Q4)Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
            var name="Muhammad Mujtaba";
            var age="15 years old";
            var Qualification="Certified Mobile Application Development";
            alert(name);
            alert(age);                                                                                                  
            alert(Qualification);                                                                                                  

Q5) Write a script to display the following alert using one JS variable: 
            var name="PIZZA\nPIZZ\nPIZ\nPI\nP";
            alert(name);

Q6)Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
            var email="muhammadmujtaba1799@gmail.com";
            alert("My email address is"+email);

Q7) Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 
            var book="A smarter way to learn JavaScript"
            alert("I am trying to learn from the book"+(book));

Q8)Write a script to display this in browser through JS 
            document.write("Yah! I can write HTML content through JS");

Q9)Store following string in a variable and show in alert and browser through JS 
            document.write("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");
        

                CHAPTER#3 "VARIABLES FOR NUMBERS "

Q1) Declare a variable called age & assign to it your age. Show your age in an alert box. 
            var age =21;
            alert("I am " +age+ " years old")

Q2)Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
            var visit=14;
            alert("You have visited this site "+visit+" times");

Q3) Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
            var birthYear=1999;
            document.writeln("My birth year is"+birthYear+" <br>" +"Data type of my decalred variable is number")

Q4)A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name b. Product title c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
            var VisitorsName="Mujtaba";
            var Product_title="Ball"
            var Quantity=6;
            document.write(VisitorsName+" ordered "+Quantity+Product_title+"(s) on XYZ clothing store.");

            CHAPTER#4 "VARIABLE NAMES: LEGAL & ILLEGAL"
Q1) Declare 3 variables in one statement. 
            var name,age,gender;

Q2)Declare 5 legal & 5 illegal variable names.
            legal
            var name,age,$uper,myVar,_userAlert;
            illegal
            var 1bear;var %gear; var for; var while ; var &and;