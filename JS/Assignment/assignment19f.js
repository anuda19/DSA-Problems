//1. Given an list of time intervals where time intervals[i] = [starti, endi],
//we need to find the least number of time intervals to
// be removed in order to make the list of time intervals
// non overlapping

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].




//2. Given an array of integers with length n and we need 
//to find element that occurs more than n/2 times in the array.

function moreThanN(a, n, k) {
    let x = n/k;
    let y = new Map();     
    for(i=0; i<n; i++){
        if(!y.has(a[i]))
        y.set(a[i], 1);
        else{
            let count = y.get(a[i]);
            y.set(a[i], count + 1);

        }
    }
    for(let [key, value] of y.entries()){
        let temp= value;
        if(temp>x)
        console.log(key+"\n");
    }
}

let a = [1, 1, 2, 2, 3, 4, 5, 2, 2, 3, 1, 1, 1];
let n = 12;
let k = 4;
moreThanN(a, n, k);
