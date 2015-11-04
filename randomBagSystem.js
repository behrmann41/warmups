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