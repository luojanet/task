'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var newArray=[];
  for(var i=0;i<collection.length;i++){
    //判断属于哪个类
    //如果同样是数组则使用递归
    if(collection[i]instanceof Array){
      newArray = newArray.concat(double_to_one(collection[i]));
    }
    else newArray.push(collection[i]);
  }
  return newArray;
}

module.exports = double_to_one;
