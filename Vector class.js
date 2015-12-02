function Vector(vector){
    
  this.vector=vector;
  //add method
  this.add= function(b){
    var res=[];
    var vec1 =this["vector"];
    var vec2 = b["vector"];
    for (i=0; i<vec1.length; i++){
      res.push(vec1[i]+vec2[i]);
    }
    var result = new Vector(res);
    return result;
  };
  //equals method
  this.equals = function(answer){
    
    if (JSON.stringify(this.add(b))===JSON.stringify(answer)){
      return true;
    } else {
        return false;
    }
  };
}
//Test
var a = new Vector([1,2]);
var b = new Vector([3,4]);

a.add(b).equals(new Vector([4,6]));
