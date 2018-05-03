function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var len = object_b.value.length;
  var arr = object_b.value;
  for(var i=0;i<len;i++){
    for(var j = 0;j<collection_a.length;j++){
      if(collection_a[j].key==arr[i]){
        collection_a[j].count=--collection_a[j].count;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
