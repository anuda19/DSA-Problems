// 1. Write code for creating a new sorted array from two sorted arrays in O(n+m)
// time complexity where n,m are the size of the unsorted arrays.




//  Write code for finding the smallest element in an array.
// let arr = [7, 5, 8, 2, 3];
// let smallest = arr[0];
//     for(let i=0; i<arr.length; i++){
//       if(arr[i] < smallest){
//           smallest = arr[i];
//       }
//     }
// console.log(smallest);

process.stdin.on('data', data => {
  console.log(`You typed ${data.toString()}`);
  process.exit();
})


// Given an array of size n, find the count of the odd number in an array

let array = [3, 2, 5, 6, 1, 8];
let oddCount = 0;
for(let i=0; i<array.length; i++){
  if(array[i]%2 !== 0){
    oddCount++;
  }
}
console.log(oddCount);



process.stdin.resume(); // A Readable Stream that points to a standard input stream (stdin)
process.stdin.setEncoding('utf-8'); // so that the input doesn't transform

let inputString1 = "";
let inputString = "";
let currentLine = 0;

process.stdin.on('data', function (userInput) {
    inputString1 = inputString1 + userInput; // taking the input string
});

process.stdin.on('end', function(x) {
    inputString1.trim();
    inputString1 = inputString1.split("\n"); // end line
    for(let i = 0; i< inputString1.length ; i++ ) {
        inputString += inputString1[i].trim() + ' ';
    }
    inputString.trim();
    inputString = inputString.split(" ");
    main();
});

function readline() {
    let result = inputString[currentLine++];
    return parseInt(result); // change when you want to use strings, according to the problem
}
function main() {	
		let n = readline();
		let arr = [];
			for( let i = 0 ; i < n ; i++ ){
			arr[i] = readline();
			}
		}
 console.log(countOddNumbers(arr, n));
        

 function countOddNumbers(arr, n){
		let n = readline();
		let countOdd = 0;
		let arr = [];
			for( let i = 0 ; i < n ; i++ ){
			if(arr[i]%2 !== 0){
			 countOdd++
		  }
    }  
 }
