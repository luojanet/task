'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var union = [];
  union=collection_a.concat(collection_b);//使用concat方法将数组来连接
  //去重
  var r =[];
  for(var i =0;i<union.length;i++){
    var flag = true;
    var temp = union[i];
    for(var j =0;j<r.length;j++){
      if(temp===r[j]){
        flag=false;
        break;  //若是重复的退出
      }
    }
    if(flag){
      r.push(temp);
    }
  }
  return r;


}

module.exports = get_union;

