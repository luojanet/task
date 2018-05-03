'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var res = [];
  var j =Math.ceil(number/interval);
  //需要精度问题
  if(number%interval==0){
    for(var i=0;i<=j;i++){
      res.push(number);
      number = (number*10-interval*10)/10;
    }
  }
  else{
    for(var i=0;i<=j;i++){
      res.push(number);
      number = (number*10-interval*10)/10;
    }
  }
  return res;
}

module.exports = spilt_to_zero;
