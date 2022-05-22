let n = 6, space = 6;
let str = "";
for(let i=0;i<=6;i++)
{
   for(let j=0;j<space;j++)
{
    str += " ";
}
    for(let k=0;k<2*i+1;k++)
    {
        str += "+";
    }
    space--;
    str += "\n";
}
console.log(str);
