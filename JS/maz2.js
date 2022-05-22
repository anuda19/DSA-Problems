let countPaths = (maze, n) =>
    {
        if(maze[0][0] == -1 || maze[n-1][n-1] == -1)
    {
        return 0;
    }
//first column
for(let i=0;i<n;i++)
    {
        if(maze[i][0] == 0)
    {   
    maze[i][0] = 1; //initializing
    }
else //blocked cell
    {
        break;
    }
}

for(let i=1;i<n;i++)
    {
        if(maze[0][i] == 0)
    {
        maze[0][i] = 1; //initializing
    }
else //blocked cell
    {
        break;
    }
}
for(let i=1;i<n;i++)
    {
        for(let j=1;j<n;j++)
    {
    if(maze[i][j] == -1) //blockage -> ignore

    {
        continue;
    }
if(maze[i-1][j] > 0)
    {
        maze[i][j] += maze[i-1][j]; //adding

    }
if(maze[i][j-1] > 0)
    {
        maze[i][j] += maze[i][j-1]; //adding

    }
    }
}
        return maze[n-1][n-1];
}
let maze = [[0, 0, 0, 0],
[0, -1, 0, 0],
[-1, 0, 0, 0],
[0, 0, 0, 0]];
let n = 4;
console.table(countPaths(maze, n));
