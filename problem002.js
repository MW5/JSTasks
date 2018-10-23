function stringRotate(a, b)
{
    if (b < 0 || (isNaN(parseFloat(b)))) {
        return "";
    } else {
        arr = a.split("");
        for (i=0; i<b; i++) {
            arr.push(arr[i]);
        }
        arr.splice(0,b);
        return arr.join('');        
    }
}
