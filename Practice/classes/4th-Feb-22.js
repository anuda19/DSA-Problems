let getWays = (n) => {
    if(n<=2){
        return n;
    }
    return getWays(n-1) + getWays(n-2)
}
console.log(getWays(6));

// Generate all numbers upto n in lexico graphical order

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// arr.sort()
// console.log(arr);

// let lexOrder = (n) => {
//     const nums = [];
//     for(let i=1; i<=n; i++){
//         nums.push(i);
//     }
//     nums.sort();
//     for(let i=0; i<n; i++){
//         console.log(nums[i]);
//     }
// }

// let n = 12;
// lexOrder(n)

// print all the subsequence
let subSequence = (arr, index, temp) => {
    let len = arr.length;
    if(index == len){
        if(temp.length > 0){
            console.log(temp);
        }
    }else {
        subSequence(arr, index+1, temp);
        temp.push(arr[index])

        subSequence(arr, index+1, temp);
        temp.pop();
    }
}

const arr = [1, 2, 3];
const temp = [];
subSequence(arr, 0, temp);

let countPaths = (maze, n) => {
    if(maze[0][0] = -1 || maze[n-1][n-1] == -1){
        return 0;
    }
    // first column
    for(let i=0; i<n; i++){
        if(maze[i][0] == 0){
            maze[i][0] = 1;
        } else {        //blocked cell
            break;
        }
    }
    //first row
    for(let i=0; i<n; i++){
        if(maze[0][i] == 0){
            maze[0][i] = 1;
        } else {
            break;
        }
    }
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(maze[i][j] == -1){
                continue;
            } 
            if(maze[i-1][j] > 0) {
                maze[i][j] += maze[i-1][j];
            }
            if(maze[i][j-1] > 0) {
                maze[i][j] += maze[i][j-1];
            }
        }
    }
    return maze[n-1][n-1];
}
let maze = [[1, 1, 1, 1],
            [1, -1, 1, 1],
            [-1, 1, 1, 1],
            [1, 1, 1, 1]]
let n = 4;
console.log(countPaths(maze, n));