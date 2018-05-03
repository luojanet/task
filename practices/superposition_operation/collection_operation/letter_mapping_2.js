'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var sum=0;
  for(var i=0;i<collection.length;i++){
    sum=sum+collection[i];
  }
  return String.fromCharCode(96+Math.ceil(sum/collection.length));
}

module.exports = average_to_letter;

