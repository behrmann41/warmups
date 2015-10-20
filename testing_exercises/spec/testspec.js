var Car = require('../car');

describe('Car', function() {
  it("charges the car", function() {
    var car = new Car();
    expect(car.battery).toEqual(0);

    car.charge(5);
    expect(car.battery).toEqual(10);

    car.charge(6);
    expect(car.battery).toEqual(22);
  });

  it("uses battery when driving", function() {
    var car = new Car();
    car.charge(10);
    expect(car.battery).toEqual(20);

    car.drive(10);
    expect(car.battery).toEqual(10);
  });

  it("can run out of battery life", function() {
    var car = new Car(10);
    car.charge(10);
    expect(car.battery).toEqual(20);
    car.drive(20);
    expect(car.battery).toEqual(0);

    expect(car.drive(10)).toEqual('Out of battery.')
  });

  it("has a bug in the software", function() {
    var car = new Car(420);
    expect(car.drive(400)).toEqual('EE GOO KUR GURT');
    expect(car.battery).toEqual(0);
  });

  it("increments the odometer when driving", function() {
    var car = new Car(10);
    expect(car.odometer()).toEqual(0);
    car.drive(50);
    expect(car.odometer()).toEqual(50);
    car.drive(25);
    expect(car.odometer()).toEqual(75);
  });
});