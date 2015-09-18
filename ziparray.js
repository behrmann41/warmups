// Implement a function which takes two parameters, 
// both of which are arrays, and zips them together. 
// ie: The arguments are [1,2,3], and [4,5,6], and after zipping the two arrays, 
// you return [1,4,2,5,3,6].

function zip (arr1, arr2) {
  var output = [];
  for (var i = 0; i < arr1.length; i++){
    output.push(arr1[i]);
    output.push(arr2[i]);
  }
  return output;
}

zip([1,2,3],[4,5,6]) // -> [1,4,2,5,3,6]

// Write a function called parseQueryString which takes a URL string as an argument 
// and returns a Javascript object containing the key-value pairs from the query string. For example:

function parseQueryString (url) {
  var test = {} 

  var input = url.split('?')
  input = input[1];
  var output = input.split('&');
  for (var i = 0; i < output.length;i++){
     var result = output[i].split('=');
     test[result[0]] = result[1];
  }
  return test; 
}
      
parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")

//=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}

parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")

//=> {q: "dogs", sort: "top", t: "week"}