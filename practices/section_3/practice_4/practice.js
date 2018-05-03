function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var newcollection = [];
  //将数组还原
  for(var i=0;i<collection_a.length;i++){
    if(collection_a[i].length==1){
      newcollection.push(collection_a[i]);
    }
    else{
      for(var j =0;j<collection_a[i][2];j++){
        newcollection.push(collection_a[i][0]);
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
  for(var i=0;i<object_b.value.length;i++){
    for(var j=0;j<result.length;j++){
      if(object_b.value[i]==result[j].key){
        result[j].count = result[j].count- Math.floor(result[j].count/3);
      }
    }
  }
  return result;

}

module.exports = create_updated_collection;
