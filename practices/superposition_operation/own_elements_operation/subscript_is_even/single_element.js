'use strict';

var single_element = function(collection){
  var res={};
  var result=[];
  var fin=[];
  for(var i=1;i<collection.length;i+=2){
      if(res[collection[i]]){
        res[collection[i]]++;
      }
      else {
        res[collection[i]]=1;
        result.push(collection[i]);
      }
    }
    for(var i=0;i<result.length;i++){
      if(res[result[i]]==1){
        fin.push(result[i]);
      }
      else
        if(res[result[i]]>1);
      else{
        fin.push([]);
        }
    }
    for(var i=0;i<fin.length;i++){
      for(var j=0;j<fin.length-i+1;j++){
        if(fin[j]>fin[j+1]){
          var  temp=fin[j+1];
          fin[j+1]=fin[j];
          fin[j]=temp;
        }
      }
    }
    return fin;
};
module.exports = single_element;
