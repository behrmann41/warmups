//Alphabetize a list by the nth character

function sortIt(list, n) {
  var str = list.split(', ');
  var sortStr = str.sort(function(a,b){
    if (a[n-1] == b[n-1]){
    return 0;
    } else if (a[n-1] > b[n-1]){
    return 1;
    } else {
    return -1
    }
  })
  return sortStr.join(', ');
}

//Sum up the random string

function sumFromString(str){
   var nums = str.match(/\d+/g);
   if (nums == null){
     return 0;
   } else {
     var sum = 0;
     for (var i = 0; i < nums.length; i ++){
      sum += Number(nums[i]);
     }
     return sum;
   }
}

// Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
};

//Tea for two - replace 2 with T 
function tea42(input) {
  var myString = input.toString();
  return myString.replace(/2/g,'t');
};

// Write a function called appendArrays that appends the items from array 2 onto array 1, 
// returning the newly formed array

function appendArrays (arr1,arr2) {
  var output = [];
  for (var i = 0; i < arr1.length; i++){
    output.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++){
      output.push(arr2[j]);
    }
  return output;
}

//refactored

function appendArrays (arr1, arr2) {
  return [].concat( arr1, arr2 )
}

console.log(appendArrays([1,2], [2,4]))

//number of rectangles in a MxN Matrix:
function numberOfRectangles(m, n) {
    var sumM = 0;
    var sumN = 0;
    for (var i = 1; i <=m; i++){
        sumM += i;
    }
    for (var j = 1; j <=n; j++){
        sumN += j;
    }
    return sumM * sumN;
}
//refactored:

function numberOfRectangles(m, n) {
  return (m * (m + 1) * n * (n + 1)) / 4;
}

// number of Xs vs number of Os (case insensitive)

function XO(str) {
    var count = 0;
    for(var i in str){
      if (str[i] == 'x' || str[i] == 'X'){
       count ++;
      } else if (str[i] == 'o' || str[i] == 'O'){
       count --;
      }
      if (count < 0) return false;
      else if (count == 0) return true
    }
    if (count > 0) return false
    return true;
} 

//refactored:

function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

//print pattern ex: if n = 4 1\n22\n333\n4444

function pattern(n){
 var output='';
 var counter = 0;
 while (counter < n){
     counter++;
     for (var i = 1; i <= counter; i++){
         output += counter;
     }
     output += '\n';
 }
 return output.trim();
}

// create a phone number out of an array of numbers:

function createPhoneNumber(numbers){
  var numArr = numbers;
  var output = '';
  output += "(";
  for (var i = 0; i < 3; i++){
    output += numArr[i];
  }
  for (var x = 0; x < 3; x++){
    numArr.shift();
  }
  output += ') '
  for (var j = 0; j < 3; j++){
    output += numArr[j];
  }
  for (var y = 0; y < 3; y++){
      numArr.shift();
  }
  output += '-';
  for (var k = 0; k < 4; k++){
      output += numArr[k]
  }
  return output;
}

//refactored

function createPhoneNumber(numbers){
  var phone = numbers.join("");
  return "(" + phone.substr(0, 3) + ") "
       + phone.substr(3, 3)
       + "-"
       + phone.substr(6, 4);
}

// adding correct suffix to any input number:

function numberToOrdinal(n) {
    var i = n % 10,
        j = n % 100;
    if (i == 1 && j != 11) {
        return n + "st";
    } else if (i == 2 && j != 12) {
        return n + "nd";
    } else if (i == 3 && j != 13) {
        return n + "rd";
    } else if (n == 0) {
        return "0";
    }
    return n + "th";
}

// refactored

function numberToOrdinal(n) {
  var suffix = "th";
  if (n == 0) suffix = "";
  if (n % 10 == 1 && n % 100 != 11) suffix = "st";
  if (n % 10 == 2 && n % 100 != 12) suffix = "nd";
  if (n % 10 == 3 && n % 100 != 13) suffix = "rd";
  return n + suffix;
}

// remove duplicates from array with two arrays as arguments

function array_diff(a, b) {
  var arr1 = a;
  var arr2 = b;
  return arr1.filter(function(elem){
      return arr2.indexOf(elem) == -1;
  })
}

// refactored

function array_diff(a, b) {
  return a.filter(function(elem) { return b.indexOf(elem) == -1; });
}

// chaining functions

function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }

//solution
function chained(functions) {
  return function(input){
    return functions.reduce(function(input, fn){ return fn(input) }, input);
  }
}

chained([f1,f2,f3])(0) // -> 4
chained([f1,f2,f3])(2) // -> 36
chained([f3,f2,f1])(2) // -> 12

chained([f4,f5,f6])("lorem ipsum") // -> "merol_muspi"

// rotate array

function rotate(array,n){
  var arr = array;
  if (n >= 0){
    var i = 0;
    while (i < n){
        i++;
        var temp = arr.pop();
        arr.unshift(temp);
    }
  } else {
    var j = 0;
    while (j > n){
        j--;
        var temp2 = arr.shift();
        arr.push(temp2);
    }
  }
  return arr;
}

// refactored
function rotate (array, n) {
  n = (array.length - n) % array.length;
  return array.slice(n).concat(array.slice(0, n));
}

//good vs evil problem

function goodVsEvil(good, evil){
  var goodCount = 0;
  var evilCount = 0;
  var gSplit = good.split(' ');
  var eSplit = evil.split(' ');

  for (var i = 0; i < gSplit.length; i++){
    goodCount += +gSplit[i];
  }

  for (var j = 0; j < eSplit.length; j++){
    evilCount += +eSplit[j];
  }
  if (goodCount < evilCount){
      return 'Battle Result: Evil eradicates all trace of Good'
  } else if (goodCount == evilCount){
      return 'Battle Result: No victor on this battle field'
  } else {
      return 'Battle Result: Good triumphs over Evil'
  }
}

// is string balanced with brackets
function isBalanced(string){
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if (string[i] === '(') count ++;
    if (string[i] === ')') count --;
    if (count < 0) return false;
  }

  return count === 0;
}


// liftoff exercise

function liftoff(instructions){
  for(var i = 0; i < instructions.length; i++){
    for(var j = 0; j < instructions.length; j++){
      if(instructions[i] > instructions[j]){
        var temp = instructions[j];
        instructions[j] = instructions[i];
        instructions[i] = temp;
      }
    }
  }
  return instructions.join(' ') + " liftoff!";
}

// refacored
function liftoff(instructions){
  return instructions.sort(function(a, b) {return b - a;}).join(' ') + ' liftoff!'
}

// squeaky clean

function squeakyClean(arr) {
  var output = [];
  var storage = [];
  for (var i = 0; i < arr.length;i++){
    if (!arr[i]){
      storage.push(arr[i])
    }else {
      output.push(arr[i])
    }
  }
  return output
}

//refactored
function squeakyClean(arr) {
  return arr.filter(function(elem) { return elem });
}

//manual ParseInt

function myParseInt(str) {
  return /^\s*\d+\s*$/.test(str) ? +str : NaN;
}
