module.exports = {

  bookData: function (array) {
    var output = {};
    for (var i = 0; i < array.length; i++){
        var id = array[i][array.length]
        output[id] = {};
        output[id]['author'] = array[i][array.length-1]
        output[id]['title'] = array[i][array.length-2]
        output[id]['isbn10'] = id;
    }
    return output;
  }

}