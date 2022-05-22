let a = 0;
let b = 1;
let c;

let n = 10;
console.log(a);
console.log(b);
for(let i=1; i<=n; i++);
    {
        c = a+b;
        a = b;
        b = c;
        console.log(c);
    }