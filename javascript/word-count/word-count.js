var Words = function(arg){};
Words.prototype.count = function(phrase){
  obj = phrase.toString()
  .replace(/(\t|\r\n|\n|\r)/gm," ")
  .replace(/  +/g, ' ')
  .toLowerCase()
  .trim()
  .split(" ")
  .reduce(function(preV, currV, i, arr){
    if(typeof(preV[currV]) === 'function'){preV[currV] = 0;}
    preV[currV] ? (preV[currV])++ : preV[currV] = 1;
    return preV;
  }, {});
  return obj;
}
module.exports = Words;
