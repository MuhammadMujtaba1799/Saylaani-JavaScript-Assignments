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
Q3) Display this in your browser 
a)  A heading stating “Rules for naming JS variables” 
b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
d) Variable names are case _________ 
e) Variable names should not be JS _________
            document.write("<h1>Rules for naming JS variables</h1><br>")
            document.write("Variable names can only contain $ or _. For example: $any_1stVariable<br>")
            document.write("Variable must begin with a letter $ or _. For example: $name, _name or name<br>")
            document.write("Variable names are case senitive<br>")
            document.write("Variable names should not be JS keywords")

            CHAPTER#5 "MATH EXPRESSIONS"
Q1) Write a program that take two numbers & add them in a new variable. Show the result in your browser
            var num1=+prompt("Enter number for sum : ");
            var num2=+prompt("Enter number for sum : ");
            var sum =num1+num2;
            document.write("Sum of "+num1+" and "+num2+" is "+sum);

Q2) Repeat task1 for subtraction, multiplication, division & modulus.
            var num1=+prompt("Enter number for sum : ");
            var num2=+prompt("Enter number for sum : ");
            var sub =num1-num2;
            var mul =num1*num2;
            var div =num1/num2;
            document.write("Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");            
            document.write("Multiplication of "+num1+" and "+num2+" is "+mul+"<br>");            
            document.write("Division of "+num1+" and "+num2+" is "+div);            

TASK#3
            var num;
            document.write("Valu after variable declaration is: "+num+"<br>");
            num=5;
            document.write("initial value: "+num+"<br>");
            num=num+1;
            document.write("value after increment is: "+num+"<br>");
            num=num+7;
            document.write("value after addition is "+num+"<br>")
            num=num-1;
            document.write("Value after decrement is: "+num+"<br>");
            num=num%3;
            document.write("The remainder is: "+num)
TASK 4
            var TicketPrice=600;
            TicketPrice*=5;
            document.write("The cost to buy 5 tickets to a movie is "+TicketPrice+"PKR");
TASK#5
            var inp=prompt("Enter number for printing table: ");
            document.write("Table of "+inp+"<br>");
            document.write(inp+"x 1="+inp*1+"<br>");
            document.write(inp+"x 2="+inp*2+"<br>");
            document.write(inp+"x 3="+inp*3+"<br>");
            document.write(inp+"x 4="+inp*4+"<br>");
            document.write(inp+"x 5="+inp*5+"<br>");
            document.write(inp+"x 6="+inp*6+"<br>");
            document.write(inp+"x 7="+inp*7+"<br>");
            document.write(inp+"x 8="+inp*8+"<br>");
            document.write(inp+"x 9="+inp*9+"<br>");
            document.write(inp+"x 10="+inp*10);

tASK#6
          var celsius=+prompt("Enter temperature in Celcius: ");
          var far=(celsius*(9/5)+32)
          document.write(celsius+"*C is "+far+"*F <br>");
          var Fahrenheit=+prompt("Enter temperature in fehrenheit: ");
          var cel=((Fahrenheit-32)*5/9)
          document.write(Fahrenheit+"*F is "+cel+"*C")

TASK#7
        var price1=650;
        var price2=100;
        var quantity1=3;
        var quantity2=7;
        var Scost=100;
        document.write("Price of item 1 is "+price1+"<br>Quantity of item 1 is "+quantity1+"<br>Price of item 2 is "+100+"<br>Quantity of item 2 is "+quantity2+"<br>Shipping Charges "+Scost+"<br><br>Total cost of your order is "+((price1*3)+(price2*7)+Scost))

TASK#8
        var TotalMarks=980;
        var MarksObtained=804;
        var Percentsge=(MarksObtained/TotalMarks)*100;
        document.write("Total Marks: "+TotalMarks+"<br>Marks obtained: "+MarksObtained+"<br>Percentage: "+Percentsge+"%");

TASK#9
        document.write("Total Currency in PKR: "+((10*104.80)+(25*28)));

TASK#10
        var num=5;
        document.write(((num+5)*10)/2);

TASK#11
        var CurrentYear=2020;
        var BirthYear=1999;
        var age=CurrentYear-BirthYear;
        document.write("<h1>Age Calculator</h1><br>Current Year: "+CurrentYear+"<br>Birth Year: "+BirthYear+"<br>Your Age is: "+age);
        
TASK#12
        document.write("<h1>The Geometrizer</h1>")
        var radius=30;
        document.write("Radius of a circle is: "+radius+ "<br>")
        var circumference=(2*3.142*radius)
        document.write("The circumference is: "+circumference+ "<br>")
        var area=3.142*(radius*radius)
        document.write("The area is: "+ area)

TASK#13
        document.write("<h1>The Lifetime Supply Calculator</h1>"+"<br>"+"<br>")
        var snack="lays";
        document.write("Favourite snack: "+ snack+"<br>")
        var currentAge=19;
        document.write("Current age: "+currentAge+"<br>")
        var estimatedAge=70;
        document.write("Estimated Maximum Age: "+estimatedAge+"<br>")
        var amountOfSnacks=10;
        document.write("Amount of snacks per day: "+amountOfSnacks+"<br>")
        var o=estimatedAge-currentAge;
        o=o*10;
        document.write("You will need "+ o+" lays to last you until the ripe old age of "+ estimatedAge)


chapter # 6-9 

Task # 1

        document.write("Result"+"<br>")
        var a=10;
        document.write("The value of a is:"+a +"<br>")
        document.write("--------------------------"+"<br>"+"<br>")

        document.write("The value of ++a: "+ ++a +"<br>")
        document.write("Now the value of a: "+ a +"<br>"+"<br>"+"<br>"+"<br>")

        document.write("The value of a++: "+ a++ +  "<br>")
        document.write("Now the value of a: "+ a +"<br>"+"<br>"+"<br>"+"<br>")

        document.write("The value of --a: "+ --a +"<br>")
        document.write("Now the value of a: "+ a +"<br>"+"<br>"+"<br>"+"<br>")

        document.write("The value of a--: "+ a-- +"<br>")
        document.write("Now the value of a: "+ a +"<br>"+"<br>"+"<br>"+"<br>")


Task # 2======

        var a = 2, b = 1;
        var result = --a - --b + ++b + b--;
        Explain the output at each stage:
        --a;
        --a - --b;
        --a - --b + ++b;
        --a - --b + ++b + b--;

        document.write("stage1"+"<br>")
        document.write("--a"+"<br>");
        document.write("The output is: "+ --a+"<br>"+"<br>")

        document.write("stage2"+"<br>")
        document.write("--a - --b"+"<br>");
        document.write("The output is: "+ 0 +"<br>"+"<br>")

        document.write("stage3"+"<br>")
        document.write("--a - --b + ++b"+"<br>");
        document.write("The output is: "+ -2 +"<br>"+"<br>")

        document.write("stage4"+"<br>")
        document.write("--a - --b + ++b + b--"+"<br>");
        document.write("")
        document.write("The output is: "+ -3+"<br>"+"<br>")

        document.write("a is: "+ -2+"<br>")
        document.write("b is: "+ -1+"<br>")
        document.write("result is: "+-3)

Task # 3======

        var a=prompt("Enter your name")
        alert(a+"  Welcome to our website")

Task # 4======

        var a=prompt("Enter a number");
        if(a=="")
        {
        for(var i=1;i<=10;i++)
        {
            document.write("5" + "x" + i + "="+ 5*i +"<br>")
        }
        }
        else{
            for(var i=1;i<=10;i++)
            {
                document.write(a + "x" + i + "="+ a*i +"<br>")
            }   
        }

Task # 5======

        var sub1=prompt("enter your subject name 1")
        var sub2=prompt("enter your subject name 2")
        var sub3=prompt("enter your subject name 3")

        var mark1=+prompt("enter your subject1 obtain number")
        var mark2=+prompt("enter your subject2 obtain number")
        var mark3=+prompt("enter your subject3 obtain number")

        var a=mark1+mark2+mark3

        var per1=((mark1/100)*100);
        var per2=((mark2/100)*100);
        var per3=((mark3/100)*100);

        var avg=(per1+per2+per3)/3


        document.write("<table border=1px>")

        document.write("<tr>")
        document.write("<td>")
        document.write("Subject")
        document.write("</td>")
        document.write("<td>")
        document.write("Total marks")
        document.write("</td>")
        document.write("<td>")
        document.write("Obtained marks")
        document.write("</td>")
        document.write("<td>")
        document.write("Percentage")
        document.write("</td>")
        document.write("</tr>")

        document.write("<tr>")
        document.write("<td>")
        document.write(sub1)
        document.write("</td>")
        document.write("<td>")
        document.write("100")
        document.write("</td>")
        document.write("<td>")
        document.write(mark1)
        document.write("</td>")
        document.write("<td>")
        document.write(per1+"%")
        document.write("</td>")
        document.write("</tr>")

        document.write("<tr>")
        document.write("<td>")
        document.write(sub2)
        document.write("</td>")
        document.write("<td>")
        document.write("100")
        document.write("</td>")
        document.write("<td>")
        document.write(mark2)
        document.write("</td>")
        document.write("<td>")
        document.write(per2+"%")
        document.write("</td>")
        document.write("</tr>")

        document.write("<tr>")
        document.write("<td>")
        document.write(sub3)
        document.write("</td>")
        document.write("<td>")
        document.write("100")
        document.write("</td>")
        document.write("<td>")
        document.write(mark3)
        document.write("</td>")
        document.write("<td>")
        document.write(per3+"%")
        document.write("</td>")
        document.write("</tr>")

        document.write("<tr>")
        document.write("<td>")
        document.write("")
        document.write("</td>")
        document.write("<td>")
        document.write("300")
        document.write("</td>")
        document.write("<td>")
        document.write(a)
        document.write("</td>")
        document.write("<td>")
        document.write(avg+"%")
        document.write("</td>")
        document.write("</tr>")

        document.write("</table>")

======chapter # 9-11 Task # 1======

        var a=prompt("Enter city name");
        if(a==="karachi")
        {
            alert("Welcome to city of lights");
        }

Task # 2======

        var gender=prompt("Enter your gender");
        if(gender==="male")
        {
            alert("Good morning sir");
        }    
        if(gender==="female")
        {
            alert("Good morning Ma'am");
        }

Task # 3======
        var color=prompt("Enter color of traffic signal");
        if(color==="red")
        {
            alert("Must stop");
        }
        if(color==="yellow")
        {
            alert("Ready to move");
        }
        if(color==="green")
        {
            alert("Move now")
        }

Task # 4======
        var fuel=prompt("Enter fuel of your car in liters")
        if(fuel<"0.25"){
            alert("Please refill the fuel in your car")
        }

Task # 5======
        var a = 4;
        if (++a === 5){
        alert("given condition for variable a is true");
        }
        alert box appear
        var b = 82;
        if (b++ === 83){
        alert("given condition for variable b is true");
        }
        alert box not appear

        var c = 12;
        if (c++ === 13){
        alert("condition 1 is true");
        }
        alert box not appear

        if (c === 13){
        alert("condition 2 is true");
        }
        alert box not appear

        if (++c < 14){
        alert("condition 3 is true");        
        }
        alert box appear

        if(c === 14){        
        alert("condition 4 is true");
        }
        alert box not appear

        var materialCost = 20000;
        var laborCost = 2000;
        var totalCost = materialCost + laborCost;
        if (totalCost === laborCost + materialCost){
        alert("The cost equals");
        }

        alert box  appear

        if (true){
            alert("True");
            }
            if (false){
            alert("False");
            }
        alert box  appear
        if("car" < "cat"){
            alert("car is smaller than cat");
            }
    
        alert box  appear

Task # 6======
        var total=+prompt("enter total marks")       
        var obt1=+prompt("enter obtained marks of subject 1")
        var obt2=+prompt("enter obtained marks of subject 2")
        var obt3=+prompt("enter obtained marks of subject 3")
        var totalObtMarks=obt1+obt2+obt3;
        var per=(totalObtMarks/total)*100;
        document.write("<h1>Mark Sheet</h1>")
        if(per>=80)
        {
            document.write("Total marks : "+total+"<br>")
            document.write("Marks obtained : "+totalObtMarks+"<br>")
            document.write("Percentage : "+per+"%"+"<br>")
            document.write("Grade : A-one" +"<br>")
            document.write("Remarks : Excellent"+"<br>")
        }
        else if(per>=70)
        {
            document.write("Total marks : "+total+"<br>")
            document.write("Marks obtained : "+totalObtMarks+"<br>")
            document.write("Percentage : "+per+"%"+"<br>")
            document.write("Grade : A" )
            document.write("Remarks : Good"+"<br>")
        }
        else if(per>=60)
        {
            document.write("Total marks : "+total+"<br>")
            document.write("Marks obtained : "+totalObtMarks+"<br>")
            document.write("Percentage : "+per+"%"+"<br>")
            document.write("Grade : B" +"<br>")
            document.write("Remarks : You need to improve"+"<br>")
        }
        else if(per<60)
        {
            document.write("Total marks : "+total+"<br>")
            document.write("Marks obtained : "+totalObtMarks+"<br>")
            document.write("Percentage : "+per+"%"+"<br>")
            document.write("Grade : Fail" +"<br>")
            document.write("Remarks : Sorry")
        }

Task # 7======
        var a=9;
        var b=+prompt("Guess the secret number (range from 1 to 10)")
        if(a===b){
            alert("Bingo! Correct answer")
        }
        if(b===10)
        {    
            alert("Close enough to the correct answer")
        }

Task # 8======
        var a=+prompt("Enter a number")
        if(a%3==0)
        {
            alert("Number "+a+" divisible by 3")
        }

Task # 9======
        var a=+prompt("Enter a number")
        if(a%2==0)
        {
            alert("It is an even number")
        }
        else{
            alert("It is odd number")
        }

Task # 10======

        var temp=+prompt("Enter Temperature")
        if(temp>40)
        {
            alert("It is too hot outside")
        }
        else if(temp>30)
        {
            alert("The weather today is normal")
        }
        else if(temp>20)
        {
            alert("Today's weather is cool")
        }
        else if(temp>10)
        {
            alert("OMG! Today’s weather is so Cool")
        }

Task # 11======
        var a=+prompt("enter 1st number")
        var b=prompt("enter operator")
        var c=+prompt("enter 2nd number")
        document.write("entered values are "+a+" and  "+c+ "<br>")
        if(b==='-')
        {
            var d=a-c;
            document.write("difference of "+a+" and "+c +" is " + d)
        }
        else if(b==='+')
        {
            var d=a+c;
            document.write("sum of "+a+" and "+c +" is " + d)
        }
        else if(b==='*')
        {
            var d=a*c;
            document.write("multiplication of "+a+" and "+c +" is " + d)
        }
        else if(b==='/')
        {
            var d=a/c;
            document.write("division of "+a+" and "+c +" is " + d)
        }
        else if(b==='%')
        {    
            var d=a%c;
            document.write("The modulus  of " + a+" and "+c+" is "+"<br>"+"Remainder ="+d)   
        }
        else{
            document.write("invalid operator")
        }

"""""chapter # 12-13""" 
Task # 1======

        var char=prompt("Enter a Character")
        if(char>=65 && char<=90)
        {
           alert("You entered Upper case character")
        }
        else if(char>=97 && char<=122)
        {
           alert("You entered lower case character")
        }

Task # 2======
        var a=+prompt("Enter first number")
        var b=+prompt("Enter second number")
        if(a>b){
            document.write(a+" is greater number")
        }
        else if(b>a){
            document.write(b+" is greater number")
        }
        else if(a===b)
        {
            document.write("both are equal")
        }

Task # 3======
        var a=+prompt("Enter a number");
        if(a>0){
           document.write("The Number is Positive")
        }
        else if(a<0){
           document.write("The Number is Negative")
        }
        else{
           document.write("Zero")
        }

Task # 4======
        var character=prompt("Enter a character");
        if(character =="a" || character =='e' || character ==='i' || character ==='o' || character ==='u'){
           document.write("You entered a vowel")
        }
        else{
           document.write("You entered a Consonent")
        }

Task # 5======

        var password=prompt("Enter a password");
        var correctPassword="saylani123"
        if(password == correctPassword){
           document.write("Your password is correct")
        }

else if(password ==""){
           document.write("Please enter a password")
        }
        else{
           document.write("Incorrect password");
        }

Task # 6======
        var greeting;
        var hour = 13;
        if (hour < 18) {
        greeting = "Good day";
        }
        else
        {
        greeting = "Good evening";
        }

Task # 7======
         var time =+prompt("Enter time");
         if(time === 0000){
            document.write("12am")
         }
        else if(time === 0100){
           document.write("1am")
        }
        else if(time === 0200){
           document.write("2am")
        }
        else if(time === 0300){
           document.write("3am")
        }
        else if(time === 0400){
           document.write("4am")
        }
        else if(time === 0500){
           document.write("5am")
        }
        else if(time === 0600){
           document.write("6am")
        }
        else if(time === 0700){
           document.write("7am")
        }
        else if(time === 0800){
           document.write("8am")
        }
        else if(time === 0900){
           document.write("9am")
        }
        else if(time === 1000){
           document.write("10am")
        }
        else if(time === 1100){
           document.write("11am")
        }
        else if(time === 1200){
           document.write("12pm")
        }
        else if(time === 1300){
           document.write("1pm")
        }
        else if(time === 1400){
           document.write("2pm")
        }
        else if(time === 1500){      
           document.write("3pm")
        }
        else if(time === 1600){
           document.write("4pm")
        }
        else if(time === 1700){
           document.write("5pm")
        }
        else if(time === 1800){
           document.write("6pm")
        }
        else if(time === 1900){
           document.write("7pm")
        }
        else if(time === 2000){
           document.write("8pm")
        }
        else if(time === 2100){
           document.write("9pm")
        }
        else if(time === 2200){
           document.write("10pm")
        }
        else if(time === 2300){
           document.write("11pm")
        }

Task # 1-7======

        var literalNotation=[];
        var objNotation=new Array();
        var b=["muzammil","mujtaba","faizan"]
        var c=[1,23,432]
        var booleanArray=[true,false]
        var mixed=[112,"sir","ali","mughal",346]
        var education=["SSC", "HSC", "BCS","BS", "BCOM", "MS"," M.Phil", "PhD"]
        document.write("<h1>Qulifications</h1>")
        for(var i=0 ;i<education.length;i++){
        document.write(i +")"+education[i]+"<br>")
        }


Task # 8======

        var names=["Michael","Jhon","Tony"]
        var scores=[320,230,480]
        var per1=(scores[0]/500)*100
        var per2=(scores[1]/500)*100
        var per3=(scores[2]/500)*100
        document.write("Score of "+names[0]+" is "+scores[0]+". Percentage: "+per1+"%"+"<br>")
        document.write("Score of "+names[1]+" is "+scores[1]+". Percentage: "+per2+"%"+"<br>")
        document.write("Score of "+names[2]+" is "+scores[2]+". Percentage: "+per3+"%"+"<br>")


Task # 9======
        document.write("<h3><u>Old Array</u></h3>"+"<br>")
        var colors=["red","blue","green","purple","orange","pink","black","white"]
        document.write(colors+"<br>")
        document.write("<h3><u>Updated Array after adding ine the beginning user input colour</u></h3>"+"<br>")
        var a=prompt("what color do you want to dd in the beginning")
        colors.unshift(a)
        document.write(colors+"<br>")
        document.write("<h3><u>Updated Array after adding ine the end user input colour</u></h3>"+"<br>")
        var a=prompt("what color do you want to dd in the end")
        colors.push(a)
        document.write(colors+"<br>")
        document.write("<h3><u>Adding two more colours in the beginning</u></h3>"+"<br>")
        colors.unshift("voilet","yellow");
        document.write(colors+"<br>")
        document.write("<h3><u>Delete first color in the array</u></h3>"+"<br>")
        colors.shift();
        document.write(colors+"<br>")
        document.write("<h3><u>Delete last color in the array</u></h3>"+"<br>")
        colors.pop();
        document.write(colors+"<br>")
        var x=prompt("At which index position you want to add a colour")
        var y=prompt("which colour do you want to add to your desired index position")
        document.write("<h3><u>colour "+y+" added to the index position "+x+ "</u></h3>"+"<br>")
        colors.splice(x,0,y)
        document.write(colors+"<br>")
        var f=prompt("At which index position you want to delete  colour")
        var g=prompt("How many colours do you want to delete ")
        document.write("<h3><u>you deleted coloyrs "+g+" which starts from "+f+ " index position</u></h3>"+"<br>")
        colors.splice(f,g)
        document.write(colors+"<br>")


Task # 10======

        var score=[320,230,480,120]
        document.write("Scores of Students : "+score+"<br>")
        score=score.sort()
        document.write("Ordered Scores of Students : "+score)

Task # 11======

        var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
        document.write("Cities list"+"<br>"+cities+"<br>")
        var selectedCities=cities.slice(0,3)
        document.write("Selected Cities list :"+"<br>"+selectedCities)

Task # 12======

        var arr=["This","is","my","cat"]
        document.write("Array:"+"<br>"+arr+"<br>")
        arr = arr.join("")
        document.write("String:"+"<br>"+arr)

Task # 13======

        var arr = ["keyboard" , "mouse" , "printer" , "monitor"];
        document.write("Device:"+"<br>"+arr+"<br>"+"<br>");
        for(var i=0; i<arr.length; i++){
           document.write("<br>"+"Out:"+"<br>"+arr[i]);
        }

Task # 14======

        var arr = ["keyboard" , "mouse" , "printer" , "monitor"];
        document.write("Device:"+"<br>"+arr+"<br>"+"<br>");
        for(var i=arr.length-1; i>=0; i--){
           document.write("<br>"+"Out:"+"<br>"+arr[i])
        }

Task # 15======

        var arr=["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
        document.write("<select>")
        for(var i=0;i<arr.length;i++)
        {
            document.write("<option>"+arr[i]+"</option>")
        }
        document.write("</select>")


"""""chapter # 17-20""""" 

Task # 1-2======

        var arr=[];
        var arr1=[
            [0,1,2,3],
            [1,0,1,2],
            [2,1,0,1]
        ]
        for(var i=0; i<4; i++)
        {
            for(var j=0;j<4;j++)
            {
                document.write(arr1[i][j] +" ")
            }
            document.write("<br>")
        }

Task # 3======

        for(var i=1;i<=10;i++)
        {
            document.write(i+"<br>")
        }

Task # 4======

        var a=+prompt("Enter a number to show its multiplication table")
        var b=+prompt("Enter length of multiplication table")
        document.write("Multiplication table of "+a+"<br>")
        document.write("Lenght "+b+"<br>")
        for(var i=1;i<=b;i++)
        {
            document.write(a + "x" + i + "="+ a*i +"<br>")
        }

Task # 5======

        var fruits = ["apple", "banana", "mango", "orange","strawberry"]
        for(var i=0;i<fruits.length;i++)
        {
            document.write(fruits[i]+"<br>"+"<br>"+"<br>")
        }    
        for(var i=0;i<fruits.length;i++)
        {
        document.write("Element at index "+i+" is "+fruits[i]+"<br>")   
        }

Task # 6======

        document.write("Counting:"+"<br>")
        for(var i=1;i<=15;i++)
        {
            document.write(i+",")
        }
        document.write("<br>")
        document.write("Reverse Counting:"+"<br>")
        for(var i=10;i>=1;i--)
        {
            document.write(i+",")
        }
        document.write("<br>")
        document.write("Even:"+"<br>")
        for(var i=0;i<=20;i++)
        {
            if(i%2==0)
            {
            document.write(i+",")
            }
        } 
        document.write("<br>") 
        document.write("Odd:"+"<br>")
        for(var i=0;i<=20;i++)
        {
            if(i%2==1)
            {
            document.write(i+",")
            }
        }
        document.write("<br>")
        document.write("Series: "+"<br>")
        for(var i=2;i<=20;i++)
        {
            if(i%2==0)
            {
                document.write(i+"k,")
            }
        }

Task # 7======

        var arr =["cake", "apple pie", "cookie", "chips", "patties"];
        var a= prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
        for(var i=0; i<arr.length; i++){
           if( a==arr[i])
           {
              document.write(arr[i]+" is available at index "+i+" in our bakery");
           }
           else 
            {
              document.write(a+" is not available in our bakery");  
            }
        }

Task # 8======

        var array = [24,53,78,91,12];
        var largest= array[0];
        document.write("Array items: "+array+"<br>")
        for (i=0; i<=array.length;i++){
            if (array[i]>=largest) {
                var largest=array[i];
            }
        }
        document.write("The largest number is "+largest)

Task # 9======

        var array = [24,53,78,91,12];
        var smallest= array[0];
        document.write("Array items: "+array+"<br>")
        for(var i=0;i<array.length;i++)
        {
            if (array[i]<smallest) {
                var smallest=array[i];
            }
        }
        document.write("The smallest number is "+smallest)

Task # 10======

        for(var i=1;i<=100;i++ )
        {
            if(i%5==0)
            {
                document.write(i+",")
            }
        }
