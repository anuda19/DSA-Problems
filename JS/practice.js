// function A(n)
// {
//     if(n>3)
//     {
//         return n-1;
//     }
//     return A(A(n + 2));
// }


// console.log(A(1));

// const hero = {
//     name: 'Batman',
//     realName: 'Bruce Wayne'
//   };
//   const { name, realName } = hero;
//   name;     // => 'Batman',
//   realName;

function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(fun(1,2)); 
console.log(fun(1,2,3)); 
console.log(fun(1,2,3,4,5)); 

