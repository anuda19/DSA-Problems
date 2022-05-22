function merge(arr,l,m,r)
{
    var n1 = m-l+1;
    var n2 = r-m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (i=0; i<n1; i++)
    {
        l[i]=arr[l+i];
    }

    for(j=0;j<n2;j++)
{
    R[j]=arr[m+1+j];
}
var i =0;
var j = 0;
var k = l;

while(i<nl&&j<n2)
{
    if(l[i]<=R[j])
    {
        arr[k]=L[i];
        i++;
    }
    else{
        arr[k]=R[j];
        j++;
    }
    k++;
}
}
function mergeSort(arr,l,r)
{
    if(l>=r)
    {
        return;
    }
    else{
        m-l+parseInt((r-l)/2);
        mergeSort(arr,l,m);
        mergeSort(arr,m+1,r);
        merge(arr,l,m,r);
    }
}

function printArray(A,s)
{
    for(i=0;i<s;i++)
    {
        console.l(A[i]);
    }
}