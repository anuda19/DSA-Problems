// // Recursion
// function print(n){
//     if(n==1){
//         return;
//     }
//     console.log('hi');
//     print(n-2)
// }
// print(5)

// // nested function
// function a(n) {
//     if(n>5){
//         return (n-1);
//     }
//     return a(a(n+2))
// }
// console.log(a(10))

// // Tracing out with the help of tree
// function B(n){
//     if(n>0){
//         console.log(n)
//         B(n-2)
//         console.log(n)
//     }
// }
// B(8);

// Indirect Recursion
function c(n){
    if(n>0){
        console.log(n-1);
        d(n-1);
    }
}
function d(n){
    if(n>1){
        console.log(n/2);
        c(n-1);
    }
}
c(10)
d(10)

// Factorial of a number
function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1)
}
console.log(factorial(5))

// Fibonacci number
function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2);
}
console.log(fib(10))

// Tower of Honoi
function TOH(n, x, y, z){
    if(n>=1){
        TOH(n-1, x, z, y)
        console.log(`Move disk from tower${x} to tower ${y}`)
        TOH(n-1, z, y, x)
    }
}
TOH(3, "x", "y", "z")