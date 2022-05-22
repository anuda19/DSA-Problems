//1. Write a program to find the length of the smallest substring in 
// String S having a maximum number of distinct characters.

let char = 256;
function max_distinct_char(str, n){
    let count = new Array(char);
    for(i=0; i<count.length; i++){
        count[i] = 0;
    }
    for(let i=0; i<n; i++){
        count[str[i].charCodeAt(0)]++;
    }
    let max_distict = 0;
    for(let i=0; i<char; i++){
        if(count[i] !=0){
            max_distict++;
        }
    }
    return max_distict;
}
function smallestSubstr(str){
    let n = str.length;
    let max_distict = max_distinct_char(str, n);
    let minl = n;

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let subs = null;
            if(i<j)
            subs = str.substring(i, j);
            else
            subs = str.substring(j, i);

            let subs_length = subs.length;
            let sub_distict_char = max_distinct_char(subs, subs_length);

            if(subs_length < minl && max_distict == sub_distict_char){
                minl = subs.length;
            }
        }
    }
    return minl;
}

let str = "Anurag";
let len = smallestSubstr(str);

console.log("The length of the smallest substring" + " consisting of maximum distinct " + "characters : " + len);




// 2. A string is given having either 0 or 1. Write a program to 
//find the length of the largest substring in String S having more
// numbers of 0 than 1.

function findLongestSub(bin){
    let n = bin.length, i;
    let sum = 0;
    let prevSum = new Map();
    let maxlen = 0;
    let currlen;
    
    for(i=0; i<n; i++){
        if(bin[i] == '1'){
            sum++;
        }else{
            sum--;
        }
        if(sum>0){
            maxlen = i+1;
        }else if(sum<=0){
            if(prevSum.has(sum-1)){
                currlen = i- (prevSum.get(sum-1) == null ? 1 : prevSum.get(sum-1));
                maxlen = Math.max(maxlen, currlen);
            }
        }
        if(!prevSum.has(sum))
        prevSum.set(sum, i);
    }
    return maxlen;
}

let bin = '1010010';
console.log(findLongestSub(bin));