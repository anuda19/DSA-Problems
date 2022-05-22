// let response = confirm(' Do you want to proceed : Yes or No');
// if(response == true){
//     document.getElementById('heading3').innerHTML = 'Yes';
// } else {
//     document.getElementById('heading4').innerHTML = 'No';
// }

// const num = prompt('Enter a number');
// console.log('Your number is ' + num);

// const response = prompt("'Enter the text, if you want to stop or for proceed ahead'");
// if(response == "'stop'"){
//     document.getElementById('heading3').innerHTML = "'Stopped !!'";
// }
// else {
//     document.getElementById('heading3').innerHTML = "Your entered text is " + response; 
// }

var arr = [2, 3, 4, 5, 6, 7, 8];
 
function multiply() {
    var pro = 1;
    for (i = 0; i < arr.length; i++)
        pro = pro * arr[i];
    return pro;
}


   console.log(multiply());

   