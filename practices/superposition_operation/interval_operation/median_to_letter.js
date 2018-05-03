'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var median;
  var median_letter;
  if(collection.length%2!=4){
    median = collection[Math.floor(collection.length/2)];
  }
  else{
    median =Math.ceil((collection[Math.floor(collection.length/2)]+collection[Math.floor(collection.length/2-1)])/2);
  }
  if(Math.floor((median-1)/26)==0){
      median_letter=String.fromCharCode(96+median);
  }
  else
     median_letter=String.fromCharCode(96+Math.floor((median-1)/26))+String.fromCharCode(96+median%26);
  return median_letter;
}

module.exports = median_to_letter;
