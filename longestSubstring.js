//longest common substring using Dynamic Programming:

function zeroVector(length) {
  var output = [];
  for (var i = 0; i < length; i++)
    output.push(0);
  return output;
}

function zeroMatrix(rows, columns) {
  return zeroVector(rows).map(function() {
    return zeroVector(columns);
  });
}

function lcs(str1, str2) {
  var maxLength = 0, maxPosition, extraValue,
      matrix = zeroMatrix(str1.length, str2.length);

  for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        matrix[i][j] = 1 + (i - 1 >= 0 && j - 1 >= 0 ? matrix[i-1][j-1] : 0);

        if (1 + extraValue > maxLength) {
          maxLength = 1 + extraValue;
          maxPosition = i;
        }
      }      
    }   
  }

  return str1.substr((maxPosition + 1) - maxLength, maxLength);
}

var str1 = 'example', str2 = 'texas';
lcs(str1, str2);