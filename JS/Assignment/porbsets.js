// 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result

// let n = 0;
// let m = -1;
// let p = 4;

// if(n>m && n>p)
// {
//     if(m>p)
//     {
//         console.log(n+ ", " + m + ", " + p);
//     }
//     else
//     {
//         console.log(n + ", " + p + ", " +m);
//     }
// }
// else if(m>n && m>p)
// {
//     if(n>p)
//     {
//         console.log(m + ", " + n + ", " +p);
//     }
//     else
//     {
//         console.log(m + ", " + p + ", " +n);
//     }
// }
// else if(p>n && p>m)
// {
//     if(n>m)
//     {
//         console.log(p + ", " + n + ", " +m);
//     }
//     else
//     {
//         console.log(p + ", " + m + ", " +n);
//     }
// }

// // 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.

// let a = -5;
// let b = -2;
// let c = 6;
// let d = 0;
// let f = -1;
// if(a>b && a>c && a>d && a>f)
// {
//     console.log(a);        
// }
// else if(b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if(c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if(d>a && d>b && d>c && d>f)
// {
//     console.log(d);
// }
// else{
//     console.log(f);
// }

// // 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// for(i=0;i<=5;i++)
// {
//     if(i===0)
//     {
//         console.log(i+" is Even");
//     }
//     else if(i%2===0){
//         console.log(i+" is Even");
//     }
//     else{
//         console.log(i+" is Odd");
//     }
// }

// // 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade

let students = [['David', 80], ['Vinod', 77], ['Divya', 88], ['Sneha', 95], ['Anurag', 98]];
let Avgmarks = 0;
for(let i=0; i<students.length; i++)
{
    Avgmarks += students[i][1];
    var avg = (Avgmarks/students.length);
}
console.log("Average Garde: " + (Avgmarks)/students.length);
if(avg<60){
    console.log('Gare: F');
}
else if(avg<70){
    console.log('Grade : D');
}
else if(avg<80){
    console.log('Grade : C');
}
else if(avg<90){
    console.log('Grade : B');
}
else if(avg<100){
    console.log('Grade : A');
}