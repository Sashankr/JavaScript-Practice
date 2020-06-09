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
