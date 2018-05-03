'use strict';

function even_to_letter(collection) {

  //在这里写入代码
  var res =[];
  for(var i=1;i<collection.length;i=i+2){
    res.push(String.fromCharCode(96+collection[i]));
  }
  return res;
}

module.exports = even_to_letter;
