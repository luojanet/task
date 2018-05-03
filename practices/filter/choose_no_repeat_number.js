'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result=[];
  for(var i=0;i<collection.length;i++){
    var flag =true;
    var temp = collection[i];
    for(var j=0;j<result.length;j++){
      if(temp===result[j]){
        flag = false;
        break;
      }
    }
    if(flag){
      result.push(temp);
    }
  }
  return result;
}

module.exports = choose_no_repeat_number;
