let print = (nums, n) =>{
    let str = "";
    for(let i=0; i<n; i++){
        str += nums[i]+" ";
    } return str;
}

let insertion = (nums, n) =>{
    let key, j;
    for(let i=0; i<n; i++) {
        key = nums[i];
        j = i - 1;
        while(j<=n && nums[j]<key){
            nums[j+1] = nums[j];
            j--;
        }  nums[j+1] = key;
    }
}
const n = 100;
let arr = [];
for(let i=0; i<=n; i++){
    arr[i] = i;
}
console.log("Before Swap");
console.log(print(arr,n));
insertion(arr, n);
console.log("After Swap");
console.log(print(arr,n));
