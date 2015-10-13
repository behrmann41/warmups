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

describe('backronym', function (){
  it('takes a string of letters and outputs a word for each', function (){
    expect(code.backronym('ABCD')).toEqual('April Building Caller District');
  })
})

var code2 = require('../nestedArray.js');

describe('nestedArray', function (){
  it('returns a nested objected when provided an array', function (){
    expect(code2.bookData([ ["Learn to Program", "Chris Pine", 1934356360],
                            ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]])).toEqual({
                                          "1934356360": {
                                            "title": "Learn to Program",
                                            "author": "Chris Pine",
                                            "isbn10": 1934356360
                                          },
                                          "1593275846": {
                                            "title": "Eloquent Javascript",
                                            "author": "Marijn Haverbeke",
                                            "isbn10": 1593275846
                                          }
                                        })
  })
})

var code3 = require('../toDecimal.js');

describe('toDecimal', function (){
  it('returns a binary number into a decimal value', function (){
    expect(code3.toDecimal(1100)).toEqual(12)
    expect(code3.toDecimal(1)).toEqual(1)
  })
})