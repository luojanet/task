function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var obj ={};
  var res =[];
  for(var i=0;i<collection_a.length;i++){
    if(obj[collection_a[i]]){
      obj[collection_a[i]]++;
    }
    else {
      obj[collection_a[i]] = 1;
      res.push(collection_a[i]);
    }
  }
  var result = [];
  for(var i=0;i<res.length;i++){
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
