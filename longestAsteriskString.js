function longestAstString (input) {
  var str = input.split(' ');
  var output = str.reduce(function(curr, prev){
    return curr.length > prev.length ? curr : prev
  })
  return output.length;
}
