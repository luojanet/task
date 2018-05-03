function count_same_elements(collection) {
  //在这里写入代码
  var newcollection = [];
  //将数组还原
  for(var i=0;i<collection.length;i++){
    if(collection[i].length==1){
      newcollection.push(collection[i]);
    }
    else{
      for(var j =0;j<collection[i][2];j++){
        newcollection.push(collection[i][0]);
      }
    }
  }
  var res=[];
  var result =[];
  var obj ={};
  for(var i=0;i<newcollection.length;i++){
    if(obj[newcollection[i]]){
      obj[newcollection[i]]++;}
    else{
      obj[newcollection[i]]=1;
      res.push(newcollection[i]);
    }
  }
  for(var i =0;i<res.length;i++){
    var s = {key:res[i],count:obj[res[i]]};
    result.push(s);
  }
  return result;
}

module.exports = count_same_elements;
