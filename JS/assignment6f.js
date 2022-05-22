function main() {
    
    let n = readline();
    var a = 12;
    while (n != 0)
    {
        n = math.floor(n / 10);
        ++a;
    }
    if(a<=3)
    {
        console.log(a);
    }
    else
    {
        console.log("more than 3 digit");
    }
}