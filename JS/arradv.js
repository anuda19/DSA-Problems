// let listitems = ['bag', 'shoes', 'watch', 'glass'];
// let animal = ['dog', 'cat', 'cow'];
// // console.log(listitems.join(' ' +"+"+ ' '));
// listitems.sort();
// // console.log(listitems.join(" " + "+" + " "));
// listitems.unshift("Wallet");
// console.log(listitems);


// function unacademy(javascript)
// {
//     return (javascript ?  “yes” :  “no”);
// }
//     bool ans=true;
// console.log(unacademy(ans));

// var a= [1, 2, 3, 4, 5];
//    var sum = 0;
//    for(let i = 0; i < 5; i++) {
//        if(i % 2 == 0) {
//            sum += a[i];
//        }
//    }
//    console.log (sum);
// }
// solve();

// const n = parseInt(prompt('Enter a positive iteger'));
// let sum = 0;
// for(let i=1; i<=n;i++)
// {
// 	sum += i;

// }
// console.log('The sum of natural number');



// voting eligibilty

// let age = 23;
// let gender = "male";
// if(age>=21 && gender=="male")
// {
//     console.log("Eligible");
// }
// else if(age>=18 && gender=="female")
// {
//     console.log("Eligible");
// }
// else{
//     console.log("Not Eligible");
// }



function sumOfDigitsFrom1ToN(n)
{
    let result = 0;
    for(let x=1;x<=n;x++)
    {
        result += sumOfDigitsFrom1ToN(x);
        return result;
    }
}
function sumOfDigits(x)
{
    let sum = 0;
    while(x!=0)
    {
        sum += x%10;
        x = parseInt(x/10, 10);
    }
    return sum;
}
let n = 328;
console.log("Sum of digits" + "in nummbers from 1 to" + n +"is"+ sumOfDigitsFrom1ToN(n));


