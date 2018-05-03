'use strict';
var even_group_calculate_average = function(collection){
  var res=[];
  for(var i=1;i<collection.length;i+=2){
    res.push(collection[i]);
  }
  var average =[];
  var sum =0;
  var sum_three=0;
  var sum_two =0;
  var count_three=0;
  var count_two=0;
  var count = 0;
  var j=0;
  for(var i =0;i<res.length;i++){
    if(res[i]%2!=0){
      j++;
    }
    else{
      if(Math.floor(res[i]/100)>0){
        sum_three = sum_three+res[i];
        count_three++;
      }
      else{
        if(Math.floor(res[i]/10)>0){
          sum_two = sum_two+res[i];
          count_two ++;
        }
        else{
          sum =sum +res[i];
          count++;
        }
      }

      }
  }
  if(j==res.length){
    average.push(0);
  }
  else{
    if(!count&&!count_two){
      average.push(sum_three/count_three);
    }
    else{
      average.push(sum/count);
      average.push(sum_two/count_two);
      average.push(sum_three/count_three);
    }
  }
  return average;
};
module.exports = even_group_calculate_average;
