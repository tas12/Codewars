function Vector(vector){
    
  this.vector=vector;
  }
  
  //add method
  Vector.prototype.add= function(b){
    var res=[];
    var vec1 =this["vector"];
    var vec2 = b["vector"];
    for (i=0; i<vec1.length; i++){
      res.push(vec1[i]+vec2[i]);
    }
    var result = new Vector(res);
    return result;
  };
  //subtract method
  Vector.prototype.subtract= function(b){
    var res=[];
    var vec1 =this["vector"];
    var vec2 = b["vector"];
    for (i=0; i<vec1.length; i++){
      res.push(vec1[i]-vec2[i]);
    }
    var result = new Vector(res);
    return result;
  };
  //dot product method
  Vector.prototype.dot= function(b){
    var res=0;
    var vec1 =this["vector"];
    var vec2 = b["vector"];
    for (i=0; i<vec1.length; i++){
      res+=vec1[i]*vec2[i];
    }
    return res;
  };
  //equals method
  Vector.prototype.equals = function(answer){
    if (this.toString()===answer.toString()){
      return true;
    } else {
    console.log(this);
        return false;
    }
  };
//test
var a = new Vector([1,2]);
var b = new Vector([3,4]);
a.add(b).equals(new Vector([4,6]));
a.subtract(b).equals(new Vector([-2,-2]));
a.dot(b).equals(11);
