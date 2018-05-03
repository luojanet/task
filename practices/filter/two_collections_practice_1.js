'use strict';

function choose_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection_a.length;i++){
    var temp =collection_a[i];
    for(var j=0;j<collection_b.length;j++){
      if(temp===collection_b[j]){
        result.push(temp);
        break;
      }
    }
  }
  return result;
}

module.exports = choose_common_elements;
