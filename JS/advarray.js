const arr = [7, 3, 5, 4, 3, 5, 4, 3];
let mapValues = new Map();
for(let i=0; i<arr.length; i++)
{
    if(mapValues.has(arr[i]) == false)
    {
        mapValues.set(arr[i], 1);
    }
else 
    {
    let count = mapValues.get(arr[i]) + 1;
        mapValues.set(arr[i], count);
    }
}
console.table(mapValues);
for(let [key, value] of mapValues)
{
    if(value == 1)
    {
        console.log(key);
    }
}


