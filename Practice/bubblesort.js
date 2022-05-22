let swap = (nums, j) =>
{
    let temp = nums[j];
    nums[j] = nums[j+1];
    nums[j+1] = temp;
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
let BubbleSort = (nums) =>
{
    let n = nums.length;
    let count = 0;
    for(let i=0; i<n-1; i++)
    {
        count++;
        for(let j=0; j<n-i-1; j++)
        {
            if(nums[j] > nums[j+1])
            {
                swap(nums, j);
            }
        }
    }
    console.log("Total Passes :" + count);
}
const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Before Swap");
console.log(print(nums));
BubbleSort(nums);
console.log("After Swap");
console.log(print(nums));


function output(object)
{
    var place=object ? object.place : 'Italy';
    return 'clean:'+ place;
}
console.log(output({place:India}));


