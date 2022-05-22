//Find the Union and Intersection of the two sorted arrays.
let checkValidity = (a, b, c) =>{
    if(a+b <= c || b+c <= a || a+c <= b){
        return false
    } else {
        return true
    }
}


if(checkValidity(8, 9, 7)){
    console.log('Valid');
}else{
    console.log('Invalid');
}

const x = 6 % 2;
const y = x ? 'One' : 'Two';