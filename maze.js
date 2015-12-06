function getToX(maze){
  var path=[], values=[];
  var i=0;
  var j=0;
  var currentCell;
  var tmp=0;
  while(i<maze.length-2 && j<maze.length){
      if (maze[i+1][j]==="_"){
        currentCell=[i,j]; 
        values.push(maze[i][j]);
        i++;
             
        for(m=0; m<maze.length; m++){
          if(maze[i+1][m]!=="W"){
             break;
          } else tmp+=1;
        }
        if(tmp===maze.length){
          break;
        }

      } else if (maze[i][j+1]==="_"){
        j++;
        currentCell=[i,j%maze.length-1]; 
        values.push(maze[i][j%maze.length-1]);
        }
      
      path.push(currentCell);
  }
  
  for(k=0; k<maze.length; k++){
      if(maze[i][k]==="x"){
          var xLoc=[i,k];
         
          if(k>currentCell[1]){
              for(l=currentCell[1]; l<=xLoc[1]; l++){
                  currentCell=[i, l];                  
                  path.push(currentCell);
                  values.push(maze[currentCell[0]][currentCell[1]]);
              }
          } else if(k<currentCell[1]){
              for(l=currentCell[1]; l>=xLoc[1]; l--){
                  currentCell=[i, l];
                  path.push(currentCell);
                  values.push(maze[currentCell[0]][currentCell[1]]);
              }
          } else {
          break;
          }
          break;
          }
          
      }
         return {path:path, values:values};
}
