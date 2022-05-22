let isPrime = num =>
{
    for(let i=2;i<num;i++)
    {
        if(num % i == 0)
        {
            return false;
        }
    }
    return true;
}
let n=40;
for(let i=3;i<n;i++)
{
    if(isPrime(i) == true)
    {
        console.log(i);
    }
}


let x = 67;
if(x%2==0 || x%3==0){
    console.log(`${x} is not Prime`)
}else{
    console.log(`${x} is Prime`);
}



