'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var res ={};
  collection.forEach(function(e){
    res[e] = res[e]>=1?res[e]+1:1
  });
  return res;

  //以下为reduce方法
  //return collection.reduce((p,k) => (p[k]++ || (p[k] = 1),p),{});

}

module.exports = grouping_count;
