function triangleArea(a, b, c)
{
    let arr = [a,b,c].sort();

    if (arr.some(x => x<=0) || arr[1] + arr[2] < arr[0]) {
        return -1;
    }
    else {
        let p = (a+b+c)/2;
        return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c))*100)/100;
    }
}