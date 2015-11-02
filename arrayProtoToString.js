String.prototype.map = function(f) {
  return this.split("").map(f).join("");
};

String.prototype.join = function(sep) {
  return this.split("").join(sep);
};

String.prototype.filter = function(f) {
  return this.split("").filter(f).join("");
};

String.prototype.forEach = function(f) {
  this.split("").forEach(f);
};

String.prototype.some = function(f) {
  return this.split("").some(f);
};

String.prototype.every = function(f) {
  return this.split("").every(f);
};

String.prototype.reduce = function(f, v) {
  return this.split("").reduce(f, v);
};

String.prototype.reduceRight = function(f, v) {
  return this.split("").reduceRight(f, v);
};

String.prototype.sort = function(f) {
  return this.split("").sort(f).join("");
};

String.prototype.reverse = function() {
  return this.split("").reverse().join("");
};

String.prototype.push = function(v) {
  var x = this.split("");
  x.push(v);
  return x.join("");
};

String.prototype.pop = function() {
  var x = this.split("");
  x.pop();
  return x.join("");
};

String.prototype.shift = function() {
  var x = this.split("");
  x.shift();
  return x.join("");
};

String.prototype.unshift = function(v) {
  var x = this.split("");
  x.unshift(v);
  return x.join("");
};

String.prototype.splice = function(...args) {
  var x = this.split("");
  x.splice(...args);
  return x.join("");
};