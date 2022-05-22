

// function selectionSort(arr,n)
// {
//     var i,j,min_idx;
//     for(i=0;i<n-1;i++)
//     {
//         min_idx=i;
//         for(j=i+1;j<n;j++)
//         {
//             if(arr[j]<arr[min_idx])
//             min_idx=j;
//             swap(arr,min_idx,i);
//         }
//     }
// }
// function swap(arr,x,y)
// {
//     var temp = arr[x]
//     arr[x] = arr[y]
//     arr[y] = temp
// }

// function Print(arr,size)
// {
//     var i;
//     for(i=0;i<size;i++)
//     console.log(arr[i]+" ");
//     console.log("\n");
// }

// var arr=[4, 83, 2, 74, 6];
// var n = 5;
// selectionSort(arr,n);
// console.log("Sorted Array: \n");
// Print(arr,n);



// ========================================================================

let swap = (nums, i, j) =>
{
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
let print = (nums) =>
{
    let str = "";
    for(let i=0; i<nums.length; i++)
    {
        str += nums[i] + " ";
    }
    return str;
}
let SelectionSort = (nums) => 
{
    let min;
    let n = nums.length;
    for(let i=0; i<n-1;i++)
    {
        min = i; 
        for(let j=i+1;j<n;j++)
        {
            if(nums[j] < nums[min])
            {
                min = j;
            }
        }
        swap(nums, min, i);
    }
}

const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Before swap");
console.log(print(nums));
SelectionSort(nums);
console.log("After swap");
console.log(print(nums));



