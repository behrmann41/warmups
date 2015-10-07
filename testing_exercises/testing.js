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
  }
}