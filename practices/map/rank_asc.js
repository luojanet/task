'use strict';
var rank_asc = function(collection) {
  //***********************冒泡排序法
   for(var i=0;i<collection.length;i++){
     for(var j =0;j<collection.length-1-i;j++){
       if(collection[j]<collection[j+1]) {
         var temp = collection[j+1];
         collection[j+1]=collection[j];
         collection[j]=temp;
       }
     }
   }
  //************************选择排序
  /*var maxIndex, temp;
  for (var i = 0; i < collection.length - 1; i++) {
    maxIndex = i;
    for (var j = i + 1; j < collection.length; j++) {
      if (collection[j] > collection[maxIndex]) {
        maxIndex = j;
      }
      temp = collection[i];
      collection[i] = collection[maxIndex];
      collection[maxIndex] = temp;
    }
  }*/
  //*************************插入排序

  return collection;
};

module.exports = rank_asc;
