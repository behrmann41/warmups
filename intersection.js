// initial solution

var test1 = [1,2,3,4,5];
var test2 = [3,4,7,8,9];

// function intersection (arr1, arr2){
//   var output = [];
//   for (var i = 0; i < arr1.length; i++){
//     for (var j = 0; j < arr2.length; j++){
//       if (arr1[i] === arr2[j]){
//         output.push(arr1[i]);
//       };
//     };
//   };
//   return output;
// }

// refactored using index Of

// function intersection (arr1, arr2){
//   var output = [];
//   for (var i = 0; i < arr1.length; i++){
//     if (arr2.indexOf(arr1[i]) > -1 ){
//       output.push(arr1[i])
//     }
//   }
//   return output;
// }

// high order function re-factor:

function intersection (arr1, arr2){
  return arr1.filter(function(n) {
    return arr2.indexOf(n) != -1
  });
}

console.log(intersection(test1, test2)); // [3,4]

var test3 = [];
console.log(intersection(test1, test3)); // []
console.log(intersection(test2, test3)); // []