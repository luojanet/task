'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
    var number_letter={
      '1':'a',
      '2':'b',
      '3':'c',
      '4':'d',
      '5':'e'
    };
    var collection_c=[];
  if(number_a<number_b){
    for( var i =1;i<=number_b;i++){
        collection_c[i-1] = number_letter[i];
    }
  }
  else
    if(number_a>number_b){
        for(var j =0;j<5;j++){
          collection_c[j] = number_letter[5-j];
        }
    }
    else{
      collection_c[0]=number_letter[number_b];
    }
  return collection_c;
}

module.exports = get_letter_interval;
