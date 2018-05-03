'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var number_c =[];
   if(number_a<number_b){
     for(var i = 0;i<(number_b-number_a+1);i++){
       var j = i+20;
       if(Math.floor((j-1)/26)==0){  //使用Math.floor向下取整
          number_c[i]=String.fromCharCode(96+Math.floor((j-1)%26+1));//避免出现96的情况
       }
       else{
         number_c[i]=String.fromCharCode(96+ Math.floor((j-1)/26))+String.fromCharCode(96+Math.floor((j-1)%26+1));
       }
      }
   }
   else
     if(number_a>number_b){
       var j = 0;
       for(var i = number_a;i>number_b-1;i--){
         if(Math.floor((i-1)/26)==0){  //使用Math.floor向下取整
           number_c[j]=String.fromCharCode(96+Math.floor((i-1)%26+1));//避免出现96的情况
         }
         else{
           number_c[j]=String.fromCharCode(96+ Math.floor((i-1)/26))+String.fromCharCode(96+Math.floor((i-1)%26+1));
         }
         j++;

       }
    }
    else{
       if(Math.floor((number_a-1)/26)==0){  //使用Math.floor向下取整
         number_c[0]=String.fromCharCode(96+Math.floor((number_a-1)%26+1));//避免出现96的情况
       }
       else{
         number_c[0]=String.fromCharCode(96+ Math.floor((number_a-1)/26))+String.fromCharCode(96+Math.floor((number_a-1)%26+1));
       }
     }
  return number_c;


}

module.exports = get_letter_interval_2;

