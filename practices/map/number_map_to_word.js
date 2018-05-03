'use strict';
var number_map_to_word = function(collection){
  for(var i=0;i<collection.length;i++){
    collection[i]=String.fromCharCode(97+i);
  }
  return collection;
};

module.exports = number_map_to_word;
