function reverse(a){
    let i, k, n = a.length;
    let t;
    for(i=0; i<n/2; i++){
        t = a[i];
        a[i] = a[n-i-1];
        a[n-i-1] = t;
    }
}
//  
let arr = [1,...100];
let n = arr.length;
reverse(arr);
console.log("Array after sorting : " + "\n");

for(let i=0; i<n; ++i){
    console.log(i);
}