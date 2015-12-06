function getToX(maze){
  var path=[[0,0]], values=[], i=0, j=0, currentCell;

  while(i<maze.length-2 && j<maze.length){
      if (maze[i+1][j]==="_"){     
        i++;
        currentCell=[i,j]; 
        values.push(maze[i][j]);
        
      } else if (maze[i][j+1]==="_"){
        j++;                
        currentCell=[i,j%(maze.length-1)]; 
        values.push(maze[i][j%(maze.length-1)]);
    
      } else if([i+1][j]==="W") {
          break;
        }      
        
    path.push(currentCell);      
  }
  //The row "x" is in
  var xArray=maze[i];
  var xLoc = xArray.indexOf("x");

  if(xLoc>currentCell[1]){
    for(l=currentCell[1]; l<=xLoc; l++){
        currentCell=[i, l];                  
        path.push(currentCell);
        values.push(maze[currentCell[0]][currentCell[1]]);
    }
  } else if(xLoc<currentCell[1]){
        for(l=currentCell[1]; l>=xLoc; l--){
            currentCell=[i, l];
            path.push(currentCell);
            values.push(maze[currentCell[0]][currentCell[1]]);
        }
  } 
  
return {path:path, values:values};
}
