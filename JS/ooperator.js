let operator = "$";

if(operator == "+")
{
    console.log("add");
}
else if(operator == "-")
{
    console.log("sub")
}
else
{
    console.log("diff operator");
}

switch(operator)
{
    case "+":
        console.log("add");
        break;
    case "-":
        console.log("sub");
        break;
    default:
        console.log("diff operator");
        break;
}