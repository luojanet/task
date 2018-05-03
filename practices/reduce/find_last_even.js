'use strict';

function find_last_even(collection) {
  //在这里写入代码
  var res;
  for(var i=0;i<collection.length;i++){
    if(collection[i]%2==0){
      res = collection[i];
    }
  }
  return res;
}

module.exports = find_last_even;
