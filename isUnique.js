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