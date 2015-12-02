//Vector class
function Vector(vector){
  this.vector=vector;
  this.res=[];
  
  //add method
  this.add= function(b){
    var vec1 =this["vector"];
    var vec2 = b["vector"];
    for (i=0; i<vec1.length; i++){
      this.res.push(vec1[i]+vec2[i]);
    }
  };
  
  //Equals method
  this.equals = function(answer){
    var ansObj = answer;
    var ans=ansObj["vector"];
    if (this.res===ans){
      return "Vector("+this.res+"])";
    }
  }
}
