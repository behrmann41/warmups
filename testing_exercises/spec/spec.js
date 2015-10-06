var code = require('../testing.js');

describe('largestProduct', function() {
  it("returns the largest product of any two integers in an array", function() {
      expect(code.largestProduct([2,3,4,-5,92,100])).toEqual(9200);
      expect(code.largestProduct([-2,3,-4,-5,-92,-100])).toEqual(9200);
  });
});