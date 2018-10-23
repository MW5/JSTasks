function isLeapYear(a) {
    if (a % 400 === 0 || (a % 100 !== 0 && a % 4 === 0)) {
        return true;
    } else {
        return false;
    }
}