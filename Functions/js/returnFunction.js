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


var beanCount = 10;

function count()
{
  var beanCount = 5;
  return beanCount;
}

var localBeanCount = count();
var gloabalBeanCount = beanCount;
console.log( (localBeanCount) );
console.log( (beanCount) );

/* THINGAMAJIG PROBLEM 
Will check it later
function clunk(times) {
  var num = times;
  while (num > 0) {
  display("clunk");
  num = num - 1;
  }
  }
  function thingamajig(size) {
  var facky = 1;
  clunkCounter = 0;
  if (size == 0) {
  display("clank");
  } else if (size == 1) {
  display("thunk");
  } else {
  while (size > 1) {
  facky = facky * size;
  size = size - 1;
  }
  clunk(facky);
  }
  }
  function display(output) {
  console.log(output);
  clunkCounter = clunkCounter + 1;
  }
  var clunkCounter = 0;
  thingamajig(5);
  console.log(clunkCounter);
*/