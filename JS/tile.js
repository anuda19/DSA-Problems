let GetWays =(n) =>
{
    if(n<=2)
    {
        return ;
    }
    return GetWays(n-1) + GetWays(n-2);
}
console.log("n = 3 : " + GetWays(3));
console.log("n = 4 : " + GetWays(4));
