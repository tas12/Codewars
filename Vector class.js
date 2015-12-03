function Vector(vector){

      this.vector=vector;
      }
      //check method for comparing lengths of vectors
      Vector.prototype.check = function(a,b){
            if(a.length!==b.length){
              throw new Error();
          }
      };
      //add method
      Vector.prototype.add= function(b){
        var res=[];
        var vec1 =this["vector"];
        var vec2 = b["vector"];
        this.check(vec1,vec2);
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
        this.check(vec1,vec2);
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
        this.check(vec1,vec2);
        for (i=0; i<vec1.length; i++){
          res+=vec1[i]*vec2[i];
        }
        return res;
      };
      //norm method
      Vector.prototype.norm= function(){
        var res=0;
        for (i=0; i<this["vector"].length; i++){
          res+=Math.pow(this["vector"][i],2);
        }
        return Math.sqrt(res);
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
      //toString method
      Vector.prototype.toString = function(){
          return "("+this["vector"].join()+")";
      };
