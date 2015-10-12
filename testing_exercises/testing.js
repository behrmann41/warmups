module.exports = {

  largestProduct: function (arr){

    var highest = Math.max(arr[0], arr[1]);
    var lowest = Math.min(arr[0], arr[1]);

    var highestProduct = arr[0] * arr[1];
    var lowestProduct = arr[0] * arr[1];

    arr.forEach(function(current) {

      highestProduct = Math.max(highestProduct, current * highest, current * lowest);
      lowestProduct = Math.min(lowestProduct, current * highest, current * lowest);

      highest = Math.max(highest, current);
      lowest = Math.min(lowest, current);
    });

    return highestProduct;
  },

  captializeSecondWord: function (arr){
    var output = []
    for (var i = 0; i < arr.length; i++){
      output.push(arr[i].replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }))
    }
    return output;
  },

  backronym: function (str) {
    var words = {"A": "April",
                 "B": "Building",
                 "C": "Caller",
                 "D": 'District',
                 "E": 'Evening',
                 "F": 'Foot',
                 "G": 'Grapple',
                 "H": 'High',
                 "I": "Igloo",
                 "J": "Jump",
                 "K": "Keep",
                 "L": "Lawn",
                 "M": "Mountain",
                 "N": "Newbie",
                 "O": "Orphan",
                 "P": "Pool",
                 "Q": "Quip",
                 "R": "Ranch",
                 "S": "Sandwich",
                 "T": "Toothbrush",
                 "U": "Up",
                 "V": "Vector",
                 "W": "Wind",
                 "X": "X-Ray",
                 "Y": "Yellow",
                 "Z": "Zebra"
                }

    var output = [];
    var input = str.split('');
    for (var i = 0; i < input.length; i++){
        for (var prop in words){
            if (input[i] == prop){
                output.push(words[prop])
            }
        }
    }
    return output.join(' ');
  }
}