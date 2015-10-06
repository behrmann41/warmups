var code = require('../testing.js');

describe('largest sum', function() {
  it("returns the largest sum of any two integers in an array", function() {
      expect(code.largestSum([2,3,4,-5,92,100])).toEqual(9200);
      expect(code.largestSum([-2,3,-4,-5,-92,-100])).toEqual(9200);
  });
});