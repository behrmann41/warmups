// warmup September 8th
//solution 1 - recursion
// function power (num, pow) {
//   if (pow == 0){ return 1 }
//     return num * power(num, pow - 1);
// }

// console.log(power(2,3));

//solution 2
//iteration solution
// function power (num , pow) {
//   var output = 1;
//   for (var i = 1; i <= pow; i++){
//     output *= num;
//   } 
//   return output;
// }
// console.log(power(4,2));

//solution 3 to allow for negative exponents
// function powerSturdy(base, exponent) {
//   if(exponent < 0) {
//     base = 1/base
//     exponent = Math.abs(exponent);
//   }
//   if ( exponent == 0 ) { return 1; }
//   return base * powerSturdy(base, exponent-1);
// }

// //for each w/ recursion

// function forEach (array, callback) {
//   if (!array.length){ return }
//     callback(array[0]);
//     return forEach(array.slice(1),callback);
// }

// //map recursively - refactor a bit
// function map (array, cb) {
//   var output = [];
//   if (!array.length){ return };
//   output.push(cb(array[0]));
//   return go(array.slice(1), cb):
//   }
// go(array,cb);
// return output
// }

// palindrome recursively
//solution Andrew Mockett
// function palindrome(string){
//   var noSpaces = string.replace(/\s/g, "").toLowerCase();
//   function go(str){
//     if (str.length <= 1) { return true };
//     if (str[0] === str[str.length - 1]){
//       var goString = str.slice(1);
//       return go(goString.slice(0,-1));
//     } else {
//       return false;
//     }
//   }
//   return go(noSpaces);
// }
// brett's solution

// function palindrome(string) {
//   var sanitizedArray = string.replace(/\W/g, "").toLowerCase().split('');

//   function isPalindrome(arrayOfChars) {
//     return (arrayOfChars.length <= 1)
//       || (arrayOfChars.pop() === arrayOfChars.shift()
//           && isPalindrome(arrayOfChars));
//   }
//   return isPalindrome(sanitizedArray);
// }

// console.log("true ?", palindrome("step on no pets")); // true
// console.log("false ?", palindrome("herpderp")); // false
// console.log("true ? ", palindrome('a man, a plan, a canal; panama')); // true

// palidrome solution - Sky

// function palindrome(string){
//   string = string.toLowerCase().replace(/\s/g, '');
//   if(string.length <= 1) return true;
//   return string.slice(0,1) !== string.slice(-1) ? false : palindrome(string.slice(1,-1));
// }

// recursively write the collatz sequence:
//Sky's solution:
// function collatzSequence(num){
//   var output = '';
//   function go(num){
//     if(num === 1) return 1;
//     output += num + '->';
//     return num % 2 === 0 ? go(num/2) : go(num*3+1);
//   }
//   go(num);
//   return output.slice(0,-2);
// }
// console.log(collatzSequence(13));
// console.log(collatzSequence(252));

// // David Yokum's solution
// function collatz (n) {
//   if (n === 1) return 1;
//   return n + " -> " + collatz(n % 2 === 0 ? n/2 : 3*n +1)
// }

// // Lisa's solutoin
// function collatzSequence(number) {
//   var param;
//   if (number == 1) {
//     return 1;
//   }
//   number % 2 == 0 ? param = number/2 : param = (number*3)+1;
//   return number + ' -> ' + collatzSequence(param);
// }

//Write a function parensChecker which takes a single string arguement consisting of a bunch of parentheses. 
//The function should return true if the string is a valid parentheses expression. For example:
// solution using reduce  
  // function parensChecker (string) {
  //   var output = string.split('');
  //   var parens = output.reduce(function(prev, curr) {
  //     if (prev >= 0) {
  //       if (curr == '(') {
  //         prev +=1;
  //       } else prev -=1;
  //       return prev;
  //     }
  //     return prev;
  //   }, 0);
  //   return parens === 0;
  // }
//solution using iteration
  function parensChecker(string){
    var depth = 0;
    for(var i in string){
        if(string[i] == '('){
            depth ++;
        } else if(string[i] == ')') {
            depth --;
        }
        if (depth < 0) return false;
    }
    if(depth > 0) return false;
    return true;
}

  console.log("true ->  " + parensChecker("()(((())))")) //=> true
  console.log("false -> " + parensChecker("())))(")) //=> false
  console.log("false -> " + parensChecker(")(")) //=> false
