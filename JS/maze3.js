let printSolution = (sol) =>
{
    console.table(sol);
}

let solveMaze = (maze) =>
{
    let sol = [];
    for(let i=0;i<n;i++)
    {
        sol[i] =[];
        for(let j=0;j<n;j++)
        {
            sol[i][j] = 0;
        }
    }
    if(solveMazeUtility(maze, 0, 0, sol) == true)
    {
        console.log("solution exist");
        printSolution(sol);
    }
    else{
        console.log("solution does not exist");
    }
};
let solveMazeUtility = (maze, i, j, sol) =>
{
    if(i ==n-1 && j == n-1 && maze[i][j] == 1)
    {
        sol[i][j] = 1;
        return true;
    }
    if(isSafe(maze, i, j) == true)
    {
        if(sol[i][j] == 1)
        {
            return false;
        }
        else{
            sol[i][j] = 1;
            if(solveMazeUtility(maze, i+1, j, sol))
            {
                return true;
            }
            if(solveMazeUtility(maze, i, j+1, sol))
            {
                return true;
            }
            if(solveMazeUtility(maze, i-1, j, sol))
            {
                return true;
            }
            if(solveMazeUtility(maze, i, j-1, sol))
            {
                return true;
            }
            sol[i][j] = 0;
            return false;
        }
    }
}
let isSafe = (maze, i, j) =>
{
    if(i>=0 && i<n && j>=0 && j<n && maze[i][j] == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}


let n =4;
let maze =[[1, 0, 0, 0],
          [1, 1, 0, 1],
          [0, 1, 0, 0],
          [1, 1, 1, 1]];
solveMaze(maze);