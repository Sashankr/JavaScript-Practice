/*The return statement is used to store the required result based on the condition that is true
if degrees > 500 define what the message should store
if degrees < 100 define what the message should store

In the end return the message that should be shown once the function completes execution
*/

function bake(degrees)
{
  var message;
  if(degrees > 500)
  {
    message = "I'm not a nuclear reactor reduce temperature";
  }
  else if(degrees < 100)
  {
    message = "I'm not a refrigerator increase the temperature";
  }
  else
  {
    message = "This temperature is ideal";
  }
  return message;
}

var status = bake(600);
console.log(status);

var status = bake(60);
console.log(status);

var status = bake(220);
console.log(status);
