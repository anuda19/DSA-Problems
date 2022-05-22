// 1. Given an array arr and sum S.
//  Find all unique combinations from an array whose sum is equal to S.

function comb(l, sum, S, local, arr) {
    if(sum == S){
        console.log("{");
        for(let i=0; i<local.length; i++){
            if(i != 0)
            console.log(" ");
            console.log(local[i]);
            if(i != local.length -1)
            console.log(", ");
    }
    console.log("}");
    return;
}

for(let i=l; i<arr.length; i++){
    if(sum + arr[i] > S)
    continue;

    if(i>l && arr[i] == arr[i-1])
    continue;
    local.push(arr[i]);
    comb(i + 1, sum + arr[i], S, local, arr);
    local.pop();
  }
}

function comb1(arr, S){
    arr.sort((a, b) => a-b);
    let local = [];
    comb(0, 0, S, local, arr);
}

let arr = [10, 1, 2, 7, 6, 1, 5];
let S = 10;
comb1(arr, S);





// Others

// function unique_combination(l, sum, K, local, A) {
//     // If a unique combination is found
//     if (sum == K) {
//         console.log("{");
//         for (let i = 0; i < local.length; i++) {
//             if (i != 0)
//             console.log(" ");
//                 console.log(local[i]);
//             if (i != local.length - 1)
//                 console.log(", ");
//         }
//         console.log("}" + " ");
//         return;
//     }
 
//     // For all other combinations
//     for (let i = l; i < A.length; i++) {
 
//         // Check if the sum exceeds K
//         if (sum + A[i] > K)
//             continue;
 
//         // Check if it is repeated or not
//         if (i > l && A[i] == A[i - 1])
//             continue;
 
//         // Take the element into the combination
//         local.push(A[i]);
 
//         // Recursive call
//         unique_combination(i + 1, sum + A[i], K, local, A);
 
//         // Remove element from the combination
//         local.pop();
//     }
// }
 
// // Function to find all combination
// // of the given elements
// function Combination(A, K) {
//     // Sort the given elements
//     A.sort((a, b) => a - b);
 
//     // To store combination
//     let local = [];
 
//     unique_combination(0, 0, K, local, A);
// }
 
// // Driver code
 
// let A = [10, 1, 2, 7, 6, 1, 5];
 
// let K = 10;
 
// // Function call
// Combination(A, K);
 






// 2. Find all subsets of an array arr using a backtracking algorithm.
 
function subsets(subset, nums, output, index)
{
    if(index == nums.length){
        subset.push(output);
        return;
    }
    subsets(subset, nums, [...output], index+1);
    output.push(nums[index]);
    subsets(subset, nums, [...output], index + 1);
}
let subset = [];
let input = [];
input.push(1);
input.push(2);
input.push(3);
subsets(subset, input, [], 0);

subset.sort((o1, o2) => {
    let n = Math.min(o1.length, o2.length);
    for(let i=0; i<n; i++){
        if(o1[i] == o2[i]){
            continue;
        }else{
            return o1[i] - o2[i];
        }
    }
    return 1;
});

for(let i=0; i<subset.length; i++){
    for(let j=0; j<subset[i].length; j++){
        console.log(subset[i][j] + " ");
    }
    console.log("<br>");
}
