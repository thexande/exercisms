var Leap = function(year) {
    this.year = year;
};

Leap.prototype.isLeap = function() {



    if (parseInt(this.year) % 4 === 0) {
        // year is divisible by 4. next check 100 and 400
        if (parseInt(this.year) % 100 === 0) {
            // special case, this is a leap year.
            if (parseInt(this.year) % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
};

module.exports = Leap;
