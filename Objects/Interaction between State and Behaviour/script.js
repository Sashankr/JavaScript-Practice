var car = {
  make: "Porche",

  model: "911",

  topSpeed: 300,

  fuel: 0,

  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
    console.log("Added " + this.fuel + " gallons of fuel") + "<br>";
  },

  started: false,

  start: function () {
    this.started = true;
    console.log("The car has been started") + "<br>";
  },
  stop: function () {
    this.started = false;
    console.log("The car has stopped") + "<br>";
  },

  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {

        console.log("The car is running now") + "<br>";
        this.fuel = this.fuel - 1;
      } else {
        console.log("There is no fuel to start the car") + "<br>";

      }
    } else {
      console.log("Please start the car first") + "<br>";
    }
  }



};

car.drive();
car.start();
car.addFuel(2);
car.start();
car.drive();
car.drive();
car.drive();
car.addFuel(2);
car.drive();
car.stop();