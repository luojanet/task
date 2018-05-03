'use strict';
var even_asc_odd_desc = function(collection){
  var even =[];
  var odd =[];
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      even.push(collection[i]);
    }
    else
      odd.push(collection[i]);
  }
  for(var i = 0;i<even.length;i++){
    for(var j=0;j<even.length-i+1;j++){
      if(even[j]>even[j+1]){
        var temp = even[j+1];
        even[j+1]=even[j];
        even[j]=temp;
      }
    }
  }
  for(var i =0;i<odd.length;i++){
    for(var j=0;j<odd.length-i+1;j++){
      if(odd[j]<odd[j+1]){
        var temp;
        temp = odd[j+1];
        odd[j+1]=odd[j];
        odd[j]=temp;
      }
    }
  }
  for(var i=0;i<odd.length;i++){
    even.push(odd[i]);
  }
  return even;
};
module.exports = even_asc_odd_desc;
