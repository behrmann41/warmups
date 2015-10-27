//solution 1

// fs = require('fs');

// function findLongest(letters) {
//   // makes an array of letters from the input
//   letterList = letters.split('');
//   // reads the file
//   fs.readFile('words.txt', function(err, data) {
//     // puts the words into array
//     var words = data.toString().split('\n');
//     var longest = ""
//     for(var i = 0; i < words.length; i ++) {
//       var match = true;
//       while (match) {
//         // split the word into an array
//         wordLetters = words[i].split('');
//         // determine if word contains a letter that isnt in the input
//         wordLetters.forEach(function(wordLetter) {
//           if (letterList.indexOf(wordLetter) < 0) {
//             match = false;
//           }
//         })
//         // if this is match and is longer than current match, substitute
//         if (match && longest.length < words[i].length ) {
//           longest = words[i]
//         }
//         break
//       }
//     }
//     console.log(longest);
//   })
// }
// findLongest('vybu');

// linkedList Solution

// function buildList(array) {
//   var list = {}
//   var head = { value: array[0] }
//   list.head = head
//   for(var i = 1; i < array.length; i++) {
//     var next = { value: array[i] }
//     head.next = next;
//     head = next;
//   }
//   return list
// }


// function findLongestInList(letters) {
//   letterList = letters.split('');
//   fs.readFile('words.txt', function(err, data) {
//     var words = data.toString().split('\n');
//     var list = buildList(words)
//     var longest = ""
//     while(list.head.next) {
//       var match = true;
//       while (match) {
//         wordLetters = list.head.value.split('');
//         wordLetters.forEach(function(wordLetter) {
//           if (letterList.indexOf(wordLetter) < 0) {
//             match = false;
//           }
//         })
//         if (match && longest.length < list.head.value.length) {
//           longest = list.head.value
//         }
//         break
//       }
//       list.head = list.head.next
//     }
//     console.log(longest, 'LINKED LIST')
//   })
  
// }
// findLongestInList('bkni')


//solution 2
var fs = require('fs')
var text = fs.readFileSync('words.txt').toString().split('\n')
var letters = 'wiorh'.split('')

var longest = text.filter(function(word){
  return word.split('').every(function(letter){
    return letters.indexOf(letter) > -1
  })
}).reduce(function(curr, next){
  return curr.length > next.length ? curr : next;
}) 

console.log(longest)

