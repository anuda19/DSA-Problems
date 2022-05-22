// let str = 'Unacademy';
// let reverseStr = function(str){
//     return [...str];
// }
// console.log(reverseStr(str));



// const str = 'unacademy';
// const chars = {};
// for(let i of str){
//     chars[i] = chars[i] + 1 || 1;
    
// }


// console.log(chars);



function max(str){
    const charMap = {};
    let max = 0;
    let maxChar = '';
    
    for( let i of str){
        charMap[i] = charMap[i] + 1 || 1;
    }
    for(let i in charMap){
        if(charMap[i] > max){
            max = charMap[i];
            maxChar = i;
        }
    }

    return maxChar;
}

let result = max("unacademy");
console.log(result);



let arr1 = [-2, 4, -3, 2, -4, 3, 5, -5];
arr1.sort(); 
arr1.reverse();
console.log(arr1);


const arr = [-2, 4, -3, 2, -4, 3, 5, -5];
const posArr = [];
const negArr = [];
for(i=0;i<=arr.length;i++)
{
    if(arr[i]>=0){
        posArr.push(arr[i]);
    }else if(arr[i]<0){
        negArr.push(arr[i]);
    }   
}
console.log(posArr.concat(negArr));

