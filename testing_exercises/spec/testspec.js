var Car = require('../car.js')
var car

describe('car', function(){

  beforeEach(function(){
    //car has two arguments, total miles and once charged miles remaining goes to 100.  Starts off at 0 by default
    car = new Car(0,0)
  })

  describe('charged', function(){
    it('car should start off as not charged', function(){
      expect(car.charged).toEqual(false)
      car.charge()
      expect(car.charged).toEqual(true)
      expect(car.milesRemaining).toEqual(100)
    })
  })

  describe('driveCar', function(){
    it('takes the miles you would like to drive the car', function(){
      expect(car.driveCar(25)).toEqual('Car needs to be charged before driving')
      car.charge()
      expect(car.driveCar(25)).toEqual(car.totalMiles )
    })
  })
})