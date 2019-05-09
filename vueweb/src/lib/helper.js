export default {
  gettype: function(params) {
    return Object.prototype.toString.call(params).slice(8, -1);
  }
};
