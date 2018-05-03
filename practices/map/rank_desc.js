'use strict';
var rank_desc = function(collection){
  //冒泡排序
  for(var i =0;i<collection.length;i++){
    for(var j=0;j<collection.length-1+i;j++){
      if(collection[j]>collection[j+1]){
        var temp;
        temp = collection[j+1];
        collection[j+1] =collection[j];
        collection[j]=temp;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;
