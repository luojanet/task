'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  //转化为数组
  var result = [];
  for(var i =0;i<collection.length;i++){
    if(collection[i]!='-'&&collection[i]!='>'){
      if(collection[i+1]!='-'&&collection[i+1]!='>'){
        result.push(parseInt(collection[i]+collection[i+1]));
        i = i+1;
      }
      else{
        result.push(parseInt(collection[i]));
      }
    }
    else continue;
  }
  //进行排序
  for(var i =0;i<result.length;i++){
    for(var j=0;j<result.length-1+i;j++){
      if(result[j]>result[j+1]){
        var temp;
        temp = result[j+1];
        result[j+1] =result[j];
        result[j]=temp;
      }
    }
  }
//
  if(result.length%2!=0){
    return result[Math.floor(result.length/2)];
  }
  else {
    return (result[result.length/2]+result[result.length/2-1])/2;
  }


}

module.exports = compute_chain_median;
