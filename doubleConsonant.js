// double consonants with "o" in between

//solution 1 - for loop
function doubleCon (string) {
  var output = ''
  for (var i = 0; i < string.length; i++){
    if (string[i] == 'a' || string[i] == 'e' 
    || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' || string[i] == ' '){
      output += string[i];
    } else {
      output += string[i];
      output += 'o';
      output += string[i];
    }
  }
  return output;
}

// solution 2 - reduce

function doubleCon (string){
    var output = string.split('')
    var newArr = [];
    return output.reduce(function(prev, curr){
       if (curr == 'i' || curr == 'o' || curr == 'a' || curr == 'e' || curr == 'u' || curr == ' '){
           newArr.push(curr);
       }else {
           newArr.push(curr)
           newArr.push('o')
           newArr.push(curr)
       }
       return newArr.join('')
    },0)
}

// refactored

var isVowel = function(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
};

function translate(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i]) && string[i] !== " ") {
            newString += string[i] + "o" + string[i];
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}

// using recursion
function nonSenseRec(string){
    var vowels = ['a','e','i','o','u','A','E','I','O','U', " "],
        stringtest = string,
        output = '';
    
    function go(string){
        if(string.length == 0) return output;
        output += vowels.indexOf(string[0]) == -1 ?  string[0] + 'o' + string[0] : string[0];
        return go(string.slice(1))
    }
    return go(stringtest)
}

nonSenseRec('this is fun');

// using an object

var vowels = {
  'a' : true,
  'e' : true,
}

function check (string) {
  if (vowels[letter]){

  }
}