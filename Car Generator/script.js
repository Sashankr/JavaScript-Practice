var make = ["Lamborghini","Porche","Mercedes","Buggati","Tesla"];
var model =["SUV","Sport","Hybrid","Electric"];
var year = ["2031","2030","2032","2033"];
var colors =["Silver","Matte Black","Red","Electric blue"];

var random1 = Math.floor(Math.random() * make.length);
var random2 = Math.floor(Math.random() * model.length);
var random3 = Math.floor(Math.random() * year.length);
var random4 = Math.floor(Math.random() * colors.length);


function makeCar()
{
  var car = 
{
  make: make[random1],
  model: model[random2],
  year: year[random3],
  color: colors[random4]
}
return car;
}

function displayCar(car)
{
  var text;
  text="Your new car is a "+car.color+" "+car.year+" "+car.make+" "+car.model;
  var body = document.getElementsByTagName("body")[0];
  var para = document.createElement("p");
  body.appendChild(para);
  para.innerHTML = text;
  para.style.fontSize = "2.5rem";
}
// var n = window.prompt("How many cars do you want?");

   makeCar();
displayCar(makeCar());


