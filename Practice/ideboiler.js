// let inputString1 = "";
// let inputString = "";
// let currentLine = 0;

// process.stdin.on('data', function (userInput) {
//     inputString1 = inputString1 + userInput; // taking the input string
// });

// process.stdin.on('end', function(x) {
//     inputString1.trim();
//     inputString1 = inputString1.split("\n"); // end line
//     for(let i = 0; i< inputString1.length ; i++ ) {
//         inputString += inputString1[i].trim() + ' ';
//     }
//     inputString.trim();
//     inputString = inputString.split(" ");
//     main();
// });

// function readline() {
//     let result = inputString[currentLine++];
//     return parseInt(result); // change when you want to use strings, according to the problem
// }
// function main() {	
// 		let t = readline();
// 		while(t--)
// 	{
// 		let arr = [];
// 			for( let i = 0 ; i < 2 ; i++ ){
// 			arr[i] = readline();
// 		}
// 		 var m = arr[0];
// 		 var n = arr[1];
// 		//write your code here
//         }
// }

// let t = readline.question();
// while(t--)
// {
// let arr = [];
//     for( let i = 0 ; i < 2 ; i++ ){
//     arr[i] = readline.question();
// }
//  var m = arr[0];
//  var n = arr[1];
// //write your code here
// console.log(TicketsSold(m, n));
// }

function TicketsSold(rows, seats)
{
	let no_of_seats = 0;

	for(let i = 1; i<=rows; i++)
	{
		if(i % 2 == 0)
		{
			continue;
		}
		//for each row, the tickets sold
		for(let j=1; j<=seats; j++)
		{
			if(j%2 != 0)
			{
				no_of_seats++;
			}
		}
	}
	return no_of_seats;
}

let arr=[5,5];
let count=0;                                                         
for (j=0;j<arr[0];j=j+2){
    for(i=0;i<arr[1];i=i+2)
    {
        count++;
    }
}
console.log(`Total sold ticket ${count}`)


//Eikooc loves bread. She has N loaves of bread, all of which expire after exactly M days. She can eat upto K loaves of bread in a day. Can she eat all the loaves of bread before they expire?

// process.stdin.resume();
// process.stdin.setEncoding('utf-8')

// let inputString1 = "";
// let inputString = "";
// let currentLine = 0;

// process.stdin.on('data', function(userInput){
// 	inputString1 = inputString1 + userInput;
// })

// process.stdin.on('end', function(x){
// 	inputString1.trim();
// 	inputString1 = inputString1.split("\n");
// 	for(let i=0; i<inputString1.length; i++){
// 		inputString += inputString1.trim() + " ";
// 	}
// 	inputString.trim();
// 	inputString = inputString.split(" ")
// 	main();
// })

// function readline(){
// 	let result = inputString[currentLine++];
// 	return parseInt(result);
// }

// function main(){
// 	let t = readline()
	
// 	for(let p=0; p<t; p++){
// 		let a = readline()
// 		let b = readline()
// 		let c = readline()
		
// 		if(b*c >= a){
// 			console.log('Yes')
// 		}else{
// 			console.log("No")
// 		}
// 	}
// }