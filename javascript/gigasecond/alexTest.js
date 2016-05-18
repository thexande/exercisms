// console.log(Date.UTC(2047, 4, 23, 1, 46, 40));

var Gigasecond = require('./gigasecond');

var gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));

console.log(gs.date());
// console.log(JSON.stringify(gs, null, 2));

//
// console.log(parseInt(this.Date.getTime()) + 1000000000);
// console.log(parseInt(this.Date.getTime()));
