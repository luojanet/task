function count_same_elements(collection) {
  //在这里写入代码
  /*for(var i=0;i<arr.length;i++){
  if(obj[arr[i]]){
    obj[arr[i]]++;}
  else{
    obj[arr[i]]=1;
  }
}*/
  var res=[];
  var result =[];
  var obj ={};
  for(var i=0;i<collection.length;i++){
    if(obj[collection[i]]){
      obj[collection[i]]++;}
    else{
      obj[collection[i]]=1;
      res.push(collection[i]);
    }
  }
  for(var i =0;i<res.length;i++){
    var s = {key:res[i],count:obj[res[i]]};
    result.push(s);
  }

  return result;
}

module.exports = count_same_elements;
