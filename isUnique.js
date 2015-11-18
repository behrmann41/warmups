//for string
function allCharsUnique (string){
    var input = {}
    var strArr = string.split(' ').join("")
    for (var i = 0; i < strArr.length; i++){
        var checker = strArr[i]
        if (input[checker]){
            return false;
        } else input[checker] = true;
    }
    return true
}

allCharsUnique('hello')
allCharsUnique('why is bear')
//for array
function uniq(arr) {
  var results = [];

    for(var i = 0; i < arr.length; i++) {
        if(results.indexOf(arr[i]) === -1) {
            results.push(arr[i]);
        }

    }

  return results;
}
