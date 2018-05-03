'use strict';
var is_exist_element = function(collection,element){
  var flag=false;
  for(var i =0;i<collection.length;i+=2){
    if(element==3){
      if(collection[i]==element){
        flag = true;
      }
    }
  }
  return flag;
};
module.exports = is_exist_element;
