"use strict"
// function convertCelciusToFarenheit(celciusTemp)
// {
//   var farenhiet = ((9/5) * celciusTemp) + 32;
//   return farenhiet;
// }
//
// document.write(convertCelciusToFarenheit(10)+"<br/>");


// var farenhiet = ((9/5) * 10) + 32;
// document.write(farenhiet);
// /*
// Output
// 50
// */


// function colors(colorName)
// {
//   /*
//   if (colorName == "orange")
//   {
//     return true;
//   }
//   */
//   if (colorName!="orange")
//   {
//     return true;
//   }
//   else {
//     return false;
//   }
//
// }
//
// document.write(colors("orange")+"<br/>");
// document.write(colors("pink")+"<br/>");
//
// var name = "Martha";
//
// document.write(name + ","+ "you've won!"+"<br/>");
//
//
// function Levels(yourLevel)
// {
//   if (yourLevel>5)
//   {
//       return true;
//   }
//   else {
//     return false;
//   }
//
//
// }
//
// document.write(Levels(2)+"<br/>");
// document.write(Levels(5)+"<br/>");
// document.write(Levels(7)+"<br/>");
//
// function CalculatePoints(level,points,bonus)
// {
//   var total =  (level * points) + bonus;
//   return total;
// }
//
// document.write(CalculatePoints(5,30000,3300)+"<br/>");
// document.write(1000+"108"+"<br/>");
//

// var scoops = 5;
// var i = 0;
// document.write(scoops+" Ice cream scoops available <br>");
// while (scoops > 0)
// {
//   i++;
//   document.write("Ate "+i+" scoops <br>");
//   scoops = scoops-1;
// }
//
// document.write("No more icecream available");

/*
var x =
20;var z = 22; var y =
x +z;

console.log(x);
console.log(z);
console.log(y);
*/

/*
var scoops = 4;

while (scoops > 0)
{
  scoops--;
    if (scoops == 3)
    {
        document.write("You ate 1 scoop<br>");
    }
    else if (scoops == 2)
    {
        document.write("You ate 2 scoops <br>");
    }

    else if (scoops == 1)
    {
        document.write("You ate 3 scoops <br>");
    }
    else
    {
        document.write("This is your last scoop <br>");
    }


}
document.write("Come and get more icecream <br>");
*/

//99 bottles of beer
/*
var word = "bottles";
var count = 99;
while (count > 0)
{

console.log(count + " " + word + " of beer on the wall");
console.log(count + " " + word + " of beer,");
console.log("Take one down, pass it around,");
count = count - 1;

// if (count > 0)
// {
// console.log(count + " " + word + " of beer on the wall.");
// }
if (count <= 0){
console.log("No more " + word + " of beer on the wall.");
}
}
*/

// ACE WEB ACADEMY
/*
function Person(first, last, age, roll) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.rollNum = roll;
}

var obj1 = new Person("sashank","r",23,1);
document.write("First Name: <br>"+obj1.firstName+"<br>"+
               "Last Name: <br>"+obj1.lastName+"<br>"+
               "Age: <br>"+obj1.age+"<br>"+
                "Roll Number: <br>"+obj1.rollNum);

/*
First Name:
sashank
Last Name:
r
Age:
23
Roll Number:
1
*/
/*
function addNumbers(num1,num2)
{
  return num1 + num2;
}

document.write("Sum of numbers = "+addNumbers(10,20));
*/
/*
var string1 = "I study at Ace Web Academy";
var string2 = string1.replace(/Ace Web Academy/,'AWA');
console.log(string2);
*/

//Object literals
/*
var car = {
            model : "Gt",
            brand : "Nissan",
            price : "80,000$"
          }

console.log(car.brand +" "+car.model+" priced at: "+car.price);
*/
//Function Constructor

/*
function CarDetails(model,brand)
{
  this.brand = brand;
  this.model = model;

}

var car1 = new CarDetails("GT","Nissan");
var car2 = new CarDetails("AMG","Mercedes");
console.log("Car1 Details \n"+car1.brand +" "+car1.model+"\n");
console.log("Car2 Details \n"+car2.brand +" "+car2.model+"\n");
*/

//Object.create

/*
var carGeneric = {
                    brand : "",
                    model : "",
                    printDetails: function()
                    {
                        console.log("Car Brand: "+this.brand+"\n"+"Car Model: "+this.model+"\n");
                    }
                 };
var carMercedes = Object.create(carGeneric);

carMercedes.model = "AMG";
carMercedes.brand = "Mercedes";
carMercedes.printDetails();

/*Output
Car Brand: Mercedes
Car Model: AMG
*/

//class
/*
class Car
{
  constructor(brand,model)
  {
    this.brand = brand;
    this.model = model;
  }

  printCarDetails()
  {
    console.log("Car Brand: "+this.brand+"\n"+"Car Model: "+this.model+"\n");
  }

}

var car1 = new Car("Nissan","GT");
car1.printCarDetails();
*/
/*
Array
var fruits = ["apple","banana","grapes"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

var bread = new Array(3);
bread[0] = "Wheat";
bread[1] = "Multi Grain";
bread[2] = "Sandwitch";
for (var i = 0; i < bread.length; i++) {
  console.log(bread[i]);
}

var food = Array("Pizza","Burger","Pasta");
for (var i = 0; i < food.length; i++) {
  console.log(food[i]);
}

var a = "Ten";
var b = a/10;
console.log(b);

var m = 10;
var n = 20;
var diff = n - m;
if(diff == 10)
{
console.log("Execute");
}
else
{
console.log("Don’t execute");
}

test = 10;
console.log(test);

var test;

var para = document.createElement("p");

document.getElementById("para1").setAttribuute("style","color : red; border: 1px solid black");
*/
