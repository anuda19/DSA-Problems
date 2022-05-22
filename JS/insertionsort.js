let print = (nums) =>
{
    let str = "";
    for(let i=0; i<nums.length; i++)
    {
        str += nums[i] + " ";
    }
    return str;
}
let InsertionSort = (nums) =>
{
    let key, n = nums.length, j;
    for(let i=1; i<n;i++)
    {
        key = nums[i];
        j = i-1;

        while(j>=0 && nums[j] > key)
        {
            nums[j+1] = nums[j];
            j--;
        }
        nums[j+1] = key;
    }
}
const nums = [64, 34, 25, 12, 22, 11, 90];
console.log("Before swap");
console.log(print(nums));
InsertionSort(nums);
console.log("After swap");
console.log(print(nums));