Object.prototype.SHOWNAME = function() {
  console.log("method SHOWNAME ", this.name);
};

Object.prototype.myAlert = function(msg) {
  console.warn(msg);
};

export default {
  add(a, b) {
    return a + b;
  }
};
