// let n = 5, space = 5;
// let str = "";
// for(let i=0;i<=5;i++)
// {
//     for(let j=0;j<space;j++)
//     {
//         str += " ";
//     }
//     for(let k=0;k<2*i-1;k++)
//     {
//         str += "*";
//     }
//     space--;
//     str += "\n";
// }
// console.log(str);


let n = 5, space = 5;
let str = "";
for(let i=5;i>=0;i--)
{
    for(let j=0;j<=space;j++)
    {
        str += " ";
    }
    for(let k=0;k<2*i-1;k++)
    {
        str += k;
    }
    space++;
    str += "\n";
}
console.log(str);
