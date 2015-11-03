// function buildMatrix (input){
//   return Array.apply(null, new Array(input)).map(function (x,i,arr){
//     return arr.map(function (y,j){
//       return "+"
//     })
//   })
// }

// function spiral (matrixSize, input){
//   buildMatrix(matrixSize)
// }

function squareSpiral(){
  if (arguments.length === 2){
    // calculate steps to reach arguments[1] with the grid arguments[0] big
    var centerGrid = arguments[0] - Math.floor(arguments[0] / 2);
    var centerPoint = [centerGrid, centerGrid];
    var step = 1;
    var counter = 1;
    for (var i = 1; i <= arguments[1]; i++){
      for (var j = 1; j <= 2; j++){
        for (var k = 1; k <= Math.abs(step); k++){
          if (counter === arguments[1]){ return centerPoint }
          if (step > 0){
            if (j === 1){
              centerPoint[0]++;
            } else {
              centerPoint[1]--;
            }
          } else {
            if (j === 1){
              centerPoint[0]--;
            } else {
              centerPoint[1]++;
            }
          }
          
          counter++;
        }
      }
      step = step > 0 ? (-1 * (step + 1)) : (-1 * (step - 1));
    }
  } else if (arguments.length === 3){
    // calculate the number at (arguments[1], arguments[2]) with a grid arguments[0] big
    var centerGrid = arguments[0] - Math.floor(arguments[0] / 2);
    var centerPoint = [centerGrid, centerGrid];
    var target = [arguments[1], arguments[2]];
    var step = 1;
    var counter = 1;
    for (var i = 1; i <= Infinity; i++){
      for (var j = 1; j <= 2; j++){
        for (var k = 1; k <= Math.abs(step); k++){
          if (centerPoint[0] === target[0] && centerPoint[1] === target[1]){ return counter }
          if (step > 0){
            if (j === 1){
              centerPoint[0]++;
            } else {
              centerPoint[1]--;
            }
          } else {
            if (j === 1){
              centerPoint[0]--;
            } else {
              centerPoint[1]++;
            }
          } 
          counter++;
        }
      }
      step = step > 0 ? (-1 * (step + 1)) : (-1 * (step - 1));
    }
  } else {
    return 'invalid input';
  }
}