
let kClosest = (points, k) =>
{
    let length = points.length;
    const distance = [];
    let x1=0, y1=0; 
    let x2, y2;
    for(let i=0; i<length; i++)
    {
        x2= points[i][0];
        y2 = points[i][1];
        distance[i] = ((x2-x1) * (x2-x1) + (y2-y1) * (y2-y1));
    }
   
    distance.sort(function(a,b) {return a-b;});
    const kDistance = distance[k-1];
for(let i=0; i<length; i++)
{
    x2 = points[i][0];
    y2 = points[i][1];
    let dist = ((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1));
    if(dist <= kDistance)
    {
        console.log(`[${x2}, ${y2}]`);
    }
  }
}
const points = [[3,3], [6,-2], [-2, 4], [-1, -8]];
const k = 3;
kClosest(points, k);