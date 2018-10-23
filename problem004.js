function getTotalNumberOfNewYaersEveSundays(a, b) {
    let i=0;
    for (a; a<=b; a++) {
         let date = new Date("01/01/"+a);
         if(date.getDay() == 0) {
             i++;
         }
    }
    return i;
}
