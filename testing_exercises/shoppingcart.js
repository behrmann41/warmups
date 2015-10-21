function Cart(){
  this.items = [];
  this.totalPrice = 0;
}

Cart.prototype.addItem = function(name, price) {
  this.items.push([name,price])
};

Cart.prototype.listItems = function() {
  return this.items
};

Cart.prototype.removeItem = function(name,price) {
  var item;
  for (var i = 0; i < this.items.length; i++){
    if (name === this.items[i][0] && price=== this.items[i][1]){
      item = this.items[i]
      this.items.splice(item, 1)
    }
  }
};

Cart.prototype.total = function() {
  var result = 0;
  for (var i = 0; i < this.items.length; i++){
    result += this.items[i][1]
  }
  this.totalPrice = result;
  return this.totalPrice
};

Cart.prototype.discount = function(percentage) {
  var result = this.totalPrice * (percentage/100);
  this.totalPrice = this.totalPrice - result;
  return this.totalPrice
};

module.exports = Cart