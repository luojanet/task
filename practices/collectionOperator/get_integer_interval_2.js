'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var i;
  var j;
  var number_c=[];
  if(number_a<number_b){
    if(number_a%2==0){
      i=number_a;
    }
    else{
      i=number_a+1;
    }//判断number_a的值
    if(number_b%2==0){
      j=number_b;
    }
    else{
      j=number_b-1;
    }//判断number_b的值
    for(i;i<=j;i=i+2){
      number_c.push(i);
    }
  }
  else
    if(number_a>number_b){
      if(number_a%2==0) i = number_a;
      else i = number_a-1;
      if(number_b%2==0) j = number_b;
      else j = number_b+1;
      for(i;i>=j;i=i-2){
        number_c.push(i);
      }
    }
    else{
      if(number_a%2==0) number_c.push(number_a);
      else number_c.push();//不放任何
    }

  return number_c;
}


module.exports = get_integer_interval_2;
