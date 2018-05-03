'use strict';
var number_map_to_word_over_26 = function(collection){
  for(var i =0;i<collection.length;i++){
    if(Math.floor((collection[i]-1)/26)==0){
      collection[i] = String.fromCharCode(96+collection[i]);
    }
    else{
      collection[i]=String.fromCharCode(96+Math.floor((collection[i]-1)/26))+String.fromCharCode(96+(collection[i]%26));
    }
  }
  return collection;
};

module.exports = number_map_to_word_over_26;
