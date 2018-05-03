'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  for(var i=0;i<collection.length;i++){
    for(var j=0;j<collection.length-i+1;j++){
      if(collection[j]>collection[j+1]){
        var temp=collection[j+1];
        collection[j+1]=collection[j];
        collection[j]=temp;
      }
    }
  }
  for(var i=0;i<3*Math.floor(collection.length/3);i=i+3){
    var temp = collection[i];
    collection[i]=collection[i+2];
    collection[i+2]=temp;
    temp=collection[i];
    collection[i]=collection[i+1];
    collection[i+1]=temp;
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
