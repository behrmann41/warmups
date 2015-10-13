module.exports = {
  toDecimal: function (num){
    var binary = String(num).split('').reverse()
    return binary.reduce(function(prev,curr,index){
      return (curr === '1') ? prev + Math.pow(2,index) : prev
    },0)
  },

  toDeci : function(binum){
    return parseInt(binum, 2)
  }
}