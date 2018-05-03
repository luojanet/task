'use strict';
var calculate_average = function(collection){
  var sum=0;
  for(var i =1;i<collection.length;i+=2){
    sum =sum+collection[i];
  }
  return sum/Math.floor(collection.length/2);
};
module.exports = calculate_average;
