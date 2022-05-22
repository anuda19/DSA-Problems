// function sum (x,y)
// {
//     console.log("hello Mr. India");
// }
// sum();

// function rev(string)
// {
//     let str = ""; 
//     for(let i = string.length - 1;i>=0;i--)
//     {
//         str += string[i];
//     }
//     return str;
// }
                       
// let input = "Anurag";
// let output = rev(input);
// console.log(output);    



function res(strg){
    let str = "";
    for(let i=strg.length-1;i>=0;i--)
    {
        str += strg[i];
    }
    return str;
}
let input = 'Anurag';
let output = res(input);
console.log(output);

let values = [3, 4, 2, -9, 8, -18];
let evenValues = values.filter(function(val){
    if(val%2==0)
    {
        return val;
    }
});
console.log(evenValues);

let pos_num = values.filter(function(values){
    return values>=0;
});
console.log(pos_num); 

function sum(...num){
    let sum = 0;
    for(let n of num){
        sum += n;
    }
    return sum;
}
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

const arr = ['a', 'b', 'c','d'];
console.log('printing values using for loop');
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log('printing values using for each');
arr.forEach(print);
function print(a){
    console.log(a)
}

const nums = [2, 4, 5, 6];
let modifiedArray = nums.map(function(n){
    return n*10;
});
console.log(modifiedArray);


