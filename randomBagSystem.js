function tetrominos(count) {
  var output = '', 
      bag = [];
  while (count-- > 0) {
    if (bag.length == 0){
      bag = 'OISZLJT'.split('');  
    } 
    output += bag.splice(Math.random() * bag.length, 1);
  }
  return output;
}

tetrominos(50)

// working on second solution

function tetrominos (input){
  var max = input.length,
      result = [],
      index;

  for (var i = 0; i < max; i++) {
    index = Math.floor(Math.random() * input.length)
    result[i] = input[index]
    input.splice(index, 1)
  };
  return result
}