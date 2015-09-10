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