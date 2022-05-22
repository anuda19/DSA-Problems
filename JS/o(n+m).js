function sortedMerge(a, b, res, n, m)
{

a.sort((a,b) => a-b);
b.sort((a,b) => a-b);


let i = 0, j = 0, k = 0;
while (i < n && j < m) {
if (a[i] <= b[j]) {
res[k] = a[i];
i += 1;
k += 1;
} else {
res[k] = b[j];
j += 1;
k += 1;
}
}   
while (i < n) { 
   
res[k] = a[i];
i += 1;
k += 1;
}   
while (j < m) { 
res[k] = b[j];
j += 1;
k += 1;
}
}



let a = [ 10, 5, 15 ];
let b = [ 20, 3, 2, 12 ];
let n = a.length;
let m = b.length;


let res = new Array(n + m);

sortedMerge(a, b, res, n, m);

console.log("Sorted merge list :");
for (let i = 0; i < n + m; i++)
console.log(" " + res[i]);

