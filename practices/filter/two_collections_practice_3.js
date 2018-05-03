'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  //在这里写入代码
  var res =[];
  for(var i=0;i<collection_a.length;i++){
    var temp =collection_a[i];
    for(var j=0;j<collection_b.length;j++){
      if(temp%collection_b[j]==0){
        res.push(temp);
      }
    }
  }
  return res;
}

module.exports = choose_divisible_integer;
