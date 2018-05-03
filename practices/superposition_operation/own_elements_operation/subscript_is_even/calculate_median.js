'use strict';
var calculate_median = function(collection){
  var len =Math.floor(collection.length/2);
  var res=[];
  var median;
  for(var i=1;i<collection.length;i=i+2){
    res.push(collection[i]);
  }
  if(len%2==0){
    median = (res[len/2]+res[len/2-1])/2;
  }
  else median =res[Math.floor(len/2)];
  return median;
};
module.exports = calculate_median;
