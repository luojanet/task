function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var res = [];
  for(var i=0;i<collection_a.length;i++){
    for(var j =0;j<collection_b.length;j++){
      if(collection_a[i]==collection_b[j]){
        res.push(collection_a[i]);
        break;
      }
    }
  }
  return res;
}

module.exports = collect_same_elements;
