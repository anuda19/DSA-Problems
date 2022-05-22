//1. Write a program to compute the Nth prime number using the concept of 
// Sieve Of Eratosthenes and derive its worst case time and space complexity.
const nums = 20;
const findPrime = (nums) => {
    const numsArr = [];
    for(i=0; i<=nums; i++){
        numsArr[i] = true;
    }
    numsArr[0] = numsArr[1] = false;
    for(let i=2; i<=Math.sqrt(nums); i++){
        for(let j=2; i*j<=nums; j++){
            numsArr[i*j] =false;
        }
    }
    for(i=0; i<=numsArr.length; i++){
        if(numsArr[i] == true){
            numsArr.push(i);
            console.log(i);
        }
    }
}
findPrime(nums);


//2. Write a program to multiply two 2D matrices and
// derive its worst case time and space complexity.

// const X = 4;
// function multiply(mtx1, mtx2, res){
//     let i, j, k;
//     for(i=0; i<X; i++){
//         for(j=0; j<X; j++){
//         res[i][j] = 0;
//         for(k=0; k<X; k++)
//             res[i][j] += mtx1[i][k] * mtx2[k][j];
//         }
//     }
// }
//     let i, j;
//     let res = new Array(X);
//     for(let k=0; k<X; k++)
//     res[k] = new Array(X);

//     let mtx1 = [[1, 1, 2, 1],
//                 [2, 3, 1, 4],
//                 [3, 2, 5, 4],
//                 [3, 2, 5, 4]];

//     let mtx2 = [[2, 1, 9, 3],
//                 [2, 3, 1, 5],
//                 [3, 6, 7, 4]
//                 [7, 4, 2, 1]];

//     multiply(mtx1, mtx2, res);
//     console.log('Result matrix is <br>');
//     for(i=0; i<X; i++){
//         console.log(res[i][j] + " ");
//         console.log('<br>');
//     }





function multiply(m1, m2, mtx1, n1, n2, mtx2){
    let k, i, j;
    let res = new Array(m1);
    for(i=0; i<m1; i++)
    res[i] = new Array(n2);
    for(i=0; i<m1; i++){
        for(j=0; j<n2; j++){   
            res[i][j] = 0;
            for(k=0; k<m2; k++){
                res[i][j] += mtx1[i][k] * mtx2[k][j]
            }
        }
    }
    for(i=0; i<m1; i++){
        for(j=0; j<n2; j++){
            console.log(res[i][j] + " ");
        }
        console.log("\n");
    }
}
let mtx1 = [[2, 4], [3, 5]];
let mtx2 = [[1, 3], [5, 3]];
let m1 =2, m2 =2, n1 =2, n2 =2;
multiply(m1, m2, mtx1, n1, n2, mtx2);