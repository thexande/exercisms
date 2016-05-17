var Hamming = require('./hamming');
var hamming = new Hamming();

console.log(hamming.compute('A', 'A'));
console.log(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT'));
