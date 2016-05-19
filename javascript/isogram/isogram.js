var Isogram = function(arg){
  this.word = arg;
};
Isogram.prototype.isIsogram = function(arg){
  // phraseArr = this.word.split("");
  // var isIsogram = true;
  // var processedArr = {};
  // var countObj = phraseArr.reduce(function(preV, currV){
  //   processedArr[currV] ? return false : processedArr[currV] = 1;
  //   return preV;
  // });
  // isIsogram = true;
  // console.log(processedArr);

    returnArray = [];
    isIsogram = true;
    stringLower = this.word.toLowerCase().replace(/[-\s]/ig, '');

  for(i=0;i<stringLower.length;i++){
    // check if we have an object index for current char
    if(returnArray[stringLower[i]] === undefined){
      // create our key
      returnArray[stringLower[i]] = 0;
      console.log(returnArray[stringLower[i]]);

    }else{
      returnArray[stringLower[i]]++;
      isIsogram = false;

    }
    // increment our value at our key.
  }
  return isIsogram;

}
module.exports = Isogram;
