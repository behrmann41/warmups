var code = require('../testing.js');

describe('largestProduct', function() {
  it("returns the largest product of any two integers in an array", function() {
      expect(code.largestProduct([2,3,4,-5,92,100])).toEqual(9200);
      expect(code.largestProduct([-2,3,-4,-5,-92,-100])).toEqual(9200);
      expect(code.largestProduct([-2,3,-4,-5,-92,100])).toEqual(460)
  });
});

describe('capitalizeArr', function (){
  it('capitalizes the second word of each element in the array', function(){
    expect(code.captializeSecondWord([ "rainbow trout", "smallmouth bass", "white bass", "channel catfish" ])).toEqual(["Rainbow Trout", "Smallmouth Bass", "White Bass", "Channel Catfish"]);
  })
})