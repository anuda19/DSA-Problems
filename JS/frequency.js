let printSolution = (board) =>
{
    console.table(board);
}

let isSafe = (board, row, col) =>
{
    let i,j;
    for(i=0;i<col;i++)
    {
        if(board[row][i] == 1)
        {
            return false;
        }
    }
    for(i=row, j=col; i>=0 && j>=0; i--,j--)
        {
            if(board[i][j] == 1)
            {
                return false;
            }
        }
    for(i=row, j=col; i<n && j>=0; i++, j--)
    {
        if(board[i][j] == 1)
        {
            return false;
        }
    }
    return true;
}

let nQueenUtility = (board, col) =>
{
    if(col>=n)
    {
        return true;
    }
    for(let i=0;i<n;i++)
    {
        if(isSafe(board, i, col))
        {
            board[i][col] = 1;
            if(nQueenUtility(board, col+1) == true)
            {
                return true;
            }
            board[i][col] = 0;
        }
    }
    return false;
}
let nQueen = (board) =>
{
if(nQueenUtility(board, 0) == true)
{
    console.log("solution exists");
    printSolution(board);
}
else{
    console.log("solution doesn't Exist");
}
}

let fillBoard = () => {
const board = [];
for(let i=0;i<n;i++)
{
    board[i] = [];
    for(let j=0;j<n;j++)
    {
        board[i][j] = 0;
    }
}
    return board;
}
let n = 4;
const board = fillBoard();
nQueen(board);