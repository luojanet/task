'use strict';

function average_uneven(collection) {

  //在这里写入代码
  var sum=0;
  var j=0;
  for(var i=0;i<collection.length;i++){
    if(1<=collection[i]&&collection[i]<=10&&collection[i]%2!=0){
      sum=sum+collection[i];
      j++;
    }
  }
  return sum/j;
}

module.exports = average_uneven;
