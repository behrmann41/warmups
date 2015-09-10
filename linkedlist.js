// function Node(data, next) {
//   this.start = null;
//   this.end = null;
//   this.data = data;
//   this.next = next || null; 
// }

// function LinkedList(head) {
//   this.head = head;
// }

// // 1. way to do it using iteration
// LinkedList.prototype.listLength = function() {
//   var node = this.head;
//   var count = 0;
//   while (node) {
//     count++;
//     node = node.next;
//   }

//   return count;
// };

// 2. way to do it using recursion

// BASE CASE: if node is null, then return 0
// LinkedList.prototype.listLength = function() {
//   function go(node) {
//     if (!node) return 0;

//     return 1 + go(node.next);
//   }

//   return go(this.head);
// };


// var head = new Node('I am first');
// var second = new Node('I am second');
// var third = new Node('I am third');

// var linkedList = new LinkedList(head);
// head.next = second;
// second.next = third;

//console.log(linkedList.listLength())


// Problems with LinkedList:

// 1. Reverse a LinkedList

// LinkedList.prototype.reverse = function(){
//   var node = this.head
//   var previous = null;
//   while (node){
//     var temp = node.next;
//     node.next = previous
//     previous = node
//     node = temp;
//   }
//   this.head = previous
//   return previous;
// }
// 2. Insert at kth index, linkedList.insertAtIndex(node, index);
// 3. Remove at Kth index, linkedList.removeAtIndex(node, index);
// 4. [Challenge] Re-implement LinkedList so that it has encapsulation, setHead method.
// 5. [Challenge] Re-implement Node so that it has encapsulation, setNext, removeNext method.

//Write a function which takes two linked lists and returns an array of the data that exists in both lists. The following is implementation of LinkedList and Node that you may use and (sample) test cases:
  function LinkedList(head) {
    this.head = head;
  }

  function Node(data, next) {
    this.data = data;
    this.next = next;
  }

  function commonDataBetweenLists(list1, list2) {
    var nodeL1 = list1.head;
    var nodeL2 = list2.head;
    var output  = [];
    while (nodelL1){
      nodeL1 = node.next;
      while (nodeL2){
        nodeL2 = node.next;
        if (nodeL2 == nodeL1){
          output.push(nodeL2)
        }
      }
    }
  }

  var l1 = new LinkedList(new Node("This is the head"));
  var foo = new Node('fooski');
  var bar = new Node('barski');
  l1.head.next = foo;
  foo.next = bar;

  var l2 = new LinkedList(new Node("something cool!"));
  var goo = new Node('gooski');
  var bar2 = new Node('barski');
  l2.head.next = bar2;
  bar2.next = goo;

  console.log(commonDataBetweenLists(l1, l2));
  // ['barski']
// Write a function sentenceToLinkedList that takes a sentence, where a sentence is defined as a collection of words separated by a single whitespace character (no need to worry about punctuation), and turns the sentence into a linked list where each word is the data value of a node. You may use the implementations for LinkedList and Node provided above. Usage looks like:
//   var sentence = 'This is a typical sentence';
//   console.log(sentenceToLinkedList(setence));
//   // { head: { data: 'This', next: { data: 'is', next: [Object] } } }
// Write a function parensChecker which takes a single string arguement consisting of a bunch of parentheses. The function should return true if the string is a valid parentheses expression. For example:
//   parensChecker("()(((())))") //=> true

//   parensChecker("())))(") //=> false

//   parensChecker(")(") //=> false

// answers from classmates:

// David Yoakum [10:24 AM] 
// ```function commonDataBetweenLists(list1, list2) {
//   var output = [];
  
//   function go (list1Node, list2Node) {
//     if (!list1Node) return;

//     function goAgain (list1Node, list2Node) {
//       if (!list2Node) return;
//       if (list1Node.data == list2Node.data) {
//         output.push(list2Node.data);
//       }
//       return goAgain (list1Node, list2Node.next)
//     }

//     var list2Node = list2.head;
//     goAgain(list1Node, list2Node)
//     return go (list1Node.next, list2Node)
//   }

//   go(list1.head, list2.head)
//   return output;
// }

// console.log(commonDataBetweenLists(l1, l2));
// // ['barski’]```

// Andrew Varnell [10:50 AM] 
// ```function toLinkedList(sentence){
//     var wordArray = sentence.split(' ');
//     var output = new LinkedList(new Node(wordArray.shift()));
//     var node = output.head;

//     wordArray.forEach(function(word){
//         word = new Node(word);
//         node.next = word;
//         node = word;
//     })
//     return output;
// }

// toLinkedList('This is a new List’)```

// Andrew Varnell [10:51 AM]
// first warm up
//   function commonDataBetweenLists(list1, list2) {
//   var commonArray = [];
//   var nodeFirst = list1.head;
//   var nodeSecond = list2.head;

//   while(nodeFirst){
//       var dataToCheck = nodeFirst.data;
//       while(nodeSecond){
//           if(nodeSecond.data == dataToCheck){
//               commonArray.push(dataToCheck);
//           }
//           nodeSecond = nodeSecond.next;
//       }
//       nodeSecond = list2.head;
//       nodeFirst = nodeFirst.next;
//   }
//   return commonArray;
// }```

// Andrew Mockett [10:57 AM] 
// pre-Andreas:

// Andrew Mockett [10:57 AM]
// ```function sentenceToLL(sentence){
//   var array = sentence.split(" ");
//   var linkedList = new LinkedList(new Node(array[0]));
//   var newArray = array.slice(1);
  
//   function go(arr){
//     if (arr.length === 1){ return new Node(arr[0], null) };
//     return new Node(arr[0], go(arr.slice(1)));
//   }

//   linkedList.head.next = go(newArray);
//   return linkedList;
// }```

// Andrew Mockett [10:57 AM]
// post-Andreas:

// Andrew Mockett [10:58 AM]
// ```function sentenceToLL(sentence){
//   var array = sentence.split(" ");  
//   function go(arr){
//     if (arr.length === 1){ return new Node(arr[0], null) };
//     return new Node(arr[0], go(arr.slice(1)));
//   }
//   return new LinkedList(go(array));
// }```

// Stephen Florian [10:59 AM] 
// ``` function sentenceToLinkedList(sentence){
//     var split = sentence.split(' ');
//     function go(split, index){
//       return split[index] ? new Node(split[index], go(split, index+1)) : null ;
//     }
//     return new LinkedList(new Node(split[0], go(split, 1)));
//   }

// function commonDataBetweenLists(list1, list2) {
//     var output = [];
//     var currentArray = [];
//     var comparatorArray = [];
//     var current = list1.head;
//     var comparator = list2.head;
//     function goCurrent() {
//         if (current === undefined) return;
//         currentArray.push(current.data);
//         current = current.next;
//         return goCurrent();
//     }
//     function goComparator() {
//         if (comparator === undefined) return;
//         comparatorArray.push(comparator.data);
//         comparator = comparator.next;
//         return goComparator();
//     }
//     function compare(array1, array2) {
//         for (var i = 0; i < array1.length; i++) {
//             for (var j = 0; j < array2.length; j++) {
//                 if (array1[i] === array2[j]) output.push(array1[i]);    
//             }
//         }
//         console.log(output);
//         return output;
//     }
//     goCurrent();
//     goComparator();
//     compare(currentArray, comparatorArray);
// }
