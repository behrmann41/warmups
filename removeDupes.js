//case sensative

function removeDupes(str){
  var input = str.split('')
  return input.filter(function(elem, pos){
    return input.indexOf(elem) === pos
  }).join('') 
}

//case in-sensative

function removeDupes(str){
  var input = str.split('')
  return input.filter(function(elem, pos){
    return input.indexOf(elem.toUpperCase()) === pos
  }).join('') 
}

removeDupes('AABB'); // 'AB'
removeDupes('AaAaBbBb'); // 'AB'
removeDupes('cAtCaT'); // 'cAt'