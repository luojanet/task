'use strict';

function choose_no_common_elements(collection_a, collection_b) {

  //在这里写入代码
  var clone =collection_a.slice(0);
  for(var i=0;i<collection_b.length;i++){
    var temp =collection_b[i];
    for(var j=0;j<clone.length;j++){
      if(temp===clone[j]) {
        clone.splice(j,1);
      }
    }
  }
  return clone;
}

module.exports = choose_no_common_elements;
