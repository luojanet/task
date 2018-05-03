'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];//存放交集
  for(var i=0;i<collection_b.length;i++){
    for(var j=0;j<collection_a.length;j++){
      if(collection_a[j]==collection_b[i]){
        collection_c.push(collection_a[j]);
      }
      else continue;
    }
  }
  return collection_c;
}

module.exports = get_intersection;
