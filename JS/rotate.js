const arr = [];
const n = 6;

for(let i=0;i<n;i++)
{
    arr[i] = prompt("enter value : " + (i+1));
}

const pos = prompt("Enter the value");
const tempArr = [];
for(let i=pos;i<arr.length;i++)
{
    tempArr.push(arr[i]);
}
for(let i=0;i<pos;i++)
{
    tempArr.push(arr[i]);
}
//document.getElementById("heading3").innerHTML = arr;

console.log(tempArr);