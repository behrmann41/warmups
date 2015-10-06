module.exports = {

  largestSum: function (arr){

    var highest = Math.max(arr[0], arr[1]);
    var lowest = Math.min(arr[0], arr[1]);

    var highestSum = arr[0] * arr[1];
    var lowestSum = arr[0] * arr[1];

    arr.forEach(function(current) {

      highestSum = Math.max(highestSum, current * highest, current * lowest);
      lowestSum = Math.min(lowestSum, current * highest, current * lowest);

      highest = Math.max(highest, current);
      lowest = Math.min(lowest, current);
    });

    return highestSum;
  }
}