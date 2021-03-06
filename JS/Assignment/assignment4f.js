//1. Write a JavaScript program to compute the exponent of a number. Note : The exponent of a number says how many times the base number is used as a factor.
//82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

let exponent = function(a, n) 
{
   if (n === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, n-1);
  }
};

console.log(exponent(4, 2));



/*2. Write a JavaScript program for binary search.
Sample array: [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'*/

function binary_Search(items, value){
  let firstIndex  = 0,
      lastIndex   = items.length - 1,
      middleIndex = Math.floor((lastIndex + firstIndex)/2);

  while(items[middleIndex] != value && firstIndex < lastIndex)
  {
     if (value < items[middleIndex])
      {
          lastIndex = middleIndex - 1;
      } 
    else if (value > items[middleIndex])
      {
          firstIndex = middleIndex + 1;
      }
      middleIndex = Math.floor((lastIndex + firstIndex)/2);
  }

return (items[middleIndex] != value) ? -1 : middleIndex;
}
var items = [0, 1, 2, 3, 4, 5, 7, 8, 9]; 
console.log(binary_Search(items, 5));