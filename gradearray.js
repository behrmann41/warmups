//given an array of test scores [ 68, 74, 99, 45, 83, 95 ] 
//and the scale: F is less than 60, D is 60 to 69, C is 70 to 79, B is 80 to 89, A is 90 to 100.

//Write a function that returns an array:
//solution using iteration
var arr = [ 68, 74, 99, 45, 83, 95 ]

function convertToGrade (array) {
  var input = [];
  for (var i = 0; i < array.length; i++){
      if (array[i] >= 90 && array[i] <= 100){
          input.push('A');
      } else if (array[i] >= 80 ){
          input.push('B');
      } else if (array[i] >= 70){
          input.push('C');
      } else if (array[i] >= 60){
          input.push('D');
      } else {
          input.push('F');
      }
  }
  return input;
}

convertToGrade(arr); // => [ D, C, A, F, B, A ]

// solution using an object:

function convertToGradeObjectForIn(arr){
  var output = [];
  var letterGrades = {
    "A": 90,
    "B": 80,
    "C": 70,
    "D": 60,
    "F": 0
  }
  for (prop in letterGrades){
    for (var i = 0; i < arr.length; i++){
      if (arr[i] >= letterGrades[prop]){
        output.push(prop)
      }
    }
  }
  return output;
}