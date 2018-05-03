'use strict';

function compute_median(collection) {
  //在这里写入代码
  //进行排序
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
  if(collection.length%2==0){
    return (collection[collection.length/2]+collection[collection.length/2-1])/2;
  }
  else return collection[Math.floor(collection.length/2)];
}

module.exports = compute_median;


