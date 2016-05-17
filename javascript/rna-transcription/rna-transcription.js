var DnaTranscriber = function(dna){};

DnaTranscriber.prototype.toRna = function(arg){
  argArr = arg.split("");
  var mapped = argArr.map(function(index){
    switch (index) {
      case 'G': return "C"; break;
      case 'C': return "G"; break;
      case 'T': return "A"; break;
      case 'A': return "U"; break;
    }
  });
  return mapped.join("");
}

module.exports = DnaTranscriber;
