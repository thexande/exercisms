var Words = require('./word-count');
var words = new Words();

var expectedCounts = "reserved words like constructor and toString ok?"
console.log(JSON.stringify(words.count(expectedCounts), null, 2));
