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
  var res =[];
  for(var i=0;i<newArray.length;i++){
    var flag=true;
    var temp =newArray[i];
    for(var j=0;j<res.length;j++){
      if(temp===res[j]){
        flag=false;
        break;
      }
    }
   if(flag){
      res.push(temp);
   }
  }
  return res;
}

module.exports = double_to_one;
