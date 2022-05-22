let print = (nums) =>
{
//using string so that values can come in one line
let str = "";
for(let i=0;i<nums.length;i++)
{
str += nums[i] + " ";
}
return str;
}
let Merge = (nums, l, mid, r) =>
{
let length1 = mid - l + 1;
let length2 = r - mid;
let Left = new Array(length1);
let Right = new Array(length2);
for(let i=0; i<length1; i++)
{
Left[i] = nums[l+i];
}
for(let j=0; j<length2; j++)
{
Right[j] = nums[mid + 1 + j];
}
//merging arrays
let i=0, j=0, k=l;
while(i<length1 && j<length2)
{
if(Left[i] <= Right[j])
{
//updating given array
nums[k] = Left[i];
i++;
}
else
{
nums[k] = Right[j];
j++;
}
k++;
}
//copy remaining elements from Left[]
while(i<length1)
{
nums[k] = Left[i];
i++;
k++;
}
//copy remaining elements from Right[]
while(j<length2)
{
nums[k] = Right[j];
j++;
k++;
}
}
// l-> left index, r->right index
let MergeSort = (nums, l, r) =>
{
if(l<r)
{
let mid = l + parseInt((r - l)/2);
MergeSort(nums, l, mid);
MergeSort(nums, mid+1, r);
Merge(nums, l, mid, r);
}
}
const nums = [12, 13, 11, 5, 6, 7];
console.log("Before swap");
console.log(print(nums));
MergeSort(nums, 0, nums.length - 1);
console.log("After swap");
console.log(print(nums));
