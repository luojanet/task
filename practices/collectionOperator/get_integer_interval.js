'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var number_c = [];
  if(number_a<number_b){
    for(var i =number_a;i<=number_b;i++){
      number_c.push(i);
    }
  }
  else if(number_a>number_b){
    for(var i =number_a;i>=number_b;i--){
      number_c.push(i);
    }
  }
  else{
    number_c.push(number_a);
  }
  return number_c;
}

module.exports = get_integer_interval;

