let stringArray = ["a", "b", "c", "d"];
let nums = [1, 2, 3, 4, 5, 6];
let arr = [1, true, "a", 2, "&"];
let a = 2;

let temp1 = Array.isArray(nums);
console.log(temp1);
let temp2 = Array.isArray(a);
console.log(temp2);

let len = nums.length;
console.log(len);

console.log(arr[2]);
console.log(arr[12]);

stringArray[1] = "x";
for(let i=0; i<stringArray.length; i++)
{
    console.log(stringArray[i]);
}