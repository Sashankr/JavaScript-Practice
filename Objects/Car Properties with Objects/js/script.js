var taxi = 
{
  make: "Gen Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341
};

document.querySelector("#taxiDetails").innerHTML = 
"Taxi Make: "+taxi.make+"<br>"+
"Taxi Model: "+taxi.model+"<br>"+
"Taxi Year of Manufacture: "+taxi.year+"<br>"+
"Taxi Color: "+taxi.color+"<br>"+
"Taxi Passengers: "+taxi.passengers+"<br>"+
"Taxi Convertible? "+taxi.convertible+"<br>"+
"Taxi Mileage: "+taxi.mileage+"<br>";

function validateCar(cars)
{
  if(cars.year > 1960)
  {
    return false;
  }
  else if(cars.mileage>10000)
  {
    return false;
  } 

  return true;
}

var isWorth = validateCar(taxi);
if(isWorth)
{
  document.querySelector("#taxiPurchase").innerHTML = "Check this car out you might like it: "+"Year "+taxi.year+" Mileage: "+taxi.mileage;
}
else
{
  var taxiPurchased = document.querySelector("#taxiPurchase");
  taxiPurchased.innerHTML = "Not worth your time, lets move on and see other cars";
  taxiPurchased.style.fontSize = "2rem";
  taxiPurchased.style.color = "red";
}

/*
var fido = 
{
  name: "Fido",
  weight: 40,
  breed: "mixed",
  loves: "walks"
};

function looseWeight(dog,weight)
{
  dog.weight = dog.weight-weight;
}
looseWeight(fido,10);
alert("Fido's weight now is "+fido.weight);
*/