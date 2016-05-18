var Gigasecond = function(arg){
  this.Date = arg;
};
Gigasecond.prototype.date = function(){
    return new Date(parseInt(this.Date.getTime()) + 1000000000000);
}
module.exports = Gigasecond;
