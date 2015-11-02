function gameOfThrees (num){
  var param;
  var step;
  var baseCase;

  num > 0 ? baseCase = 1 : baseCase = -1;

  if (num === baseCase) {
    return baseCase;
  }
  else if (num % 3 === 0) {
    param = num;
    step = 0;
  }
  else if (num % 3 === 2) {
    param = num + 1;
    step = 1;
  }
  else if (num % 3 === 1) {
    param = num - 1;
    step = -1;
  }
  return num + ' ' + step + '\n' + gameOfThrees(param/3);
}

gameOfThrees(99)
