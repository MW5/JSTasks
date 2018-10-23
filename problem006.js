function divisible(a) {
    let divisible = true;
    for (let i=1; i<arguments.length; i++) {
        if (!Number.isInteger(arguments[0]/arguments[i])) {
            divisible = false;
        }
    }
    return divisible;
}