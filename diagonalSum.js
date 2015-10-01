// my initial solution

var exampleArray =

                  [[1, 0, 0, 0],

                  [0, 1, 0, 0],

                  [0, 0, 1, 0],

                  [0, 0, 0, 1]]

function diagonalSum(array){
   var count = 0;
   for (var i = 0; i < array.length; i++){
       count += array[i][i]
   }
   return count;
}

diagonalSum(exampleArray) // => 4