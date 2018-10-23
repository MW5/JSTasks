function parametricSort(a, b)
{
   if (b == 'asc') {
       return a.sort(function(a, b){return a-b});
   } else if (b == 'desc') {
       return a.sort(function(a, b){return b-a});
   } else {
       return false;
   }
}
