var Hamming = function(dna){};

Hamming.prototype.compute = function(dna1, dna2) {
    // check for equal length
    dna1 = dna1.split("");
    dna2 = dna2.split("");
    var counter = 0;
    if(dna1.length === dna2.length){
      for(i=0;i<dna1.length;i++){
        if(dna1[i] != dna2[i]){
          // not matching
          counter++;
        }
      }
    } else{
      // arguments are different lengths.
      throw 'DNA strands must be of equal length.';
    }
    return counter;
}
module.exports = Hamming;
