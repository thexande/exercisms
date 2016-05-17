//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
// YOUR CODE GOES HERE
  if(input.substr(input.length - 1) === "?" && input != input.toUpperCase()){
    return "Sure."
  }
  if(input.substr(input.length - 1) === "?" && !isNaN(parseInt(input.substr(0)))){
    return "Sure."
  }
  else if(input === input.toUpperCase() && input.trim() != ""
  && isNaN(parseInt(input.substr(input.length - 1)))){
    return "Whoa, chill out!"
  }
  else if(input.trim() === ''){
    return "Fine. Be that way!";
  }
  else{
    return "Whatever."
  }

};

module.exports = Bob;
