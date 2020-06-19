function bark(name,weight)
{
  if(weight >20)
  {
    console.log(name+" says WOOF WOOF!");
  }
  else
  {
    console.log(name+" says woof woof");
  }
}
/* We can pass expressions as a arguement
and the expression is evaluated and then passed to the function
*/
console.log(bark("Jimmy",210/10));

function whatShallWear(temp)
{
  if(temp < 60)
  {
    console.log("Wear Jacket");
    
  }
  else if(temp < 70)
  {
    console.log("Wear sweater");
    
  }
  else
  {
    console.log("Wear T-Shirt");
    
  }
}

console.log(whatShallWear(50));
console.log(whatShallWear(80));
console.log(whatShallWear(60));


function doIt(param) {
  param = 2;
  }
  var test = 1;
  doIt(test);
  console.log(test);