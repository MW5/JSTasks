function deepFindAndCount(a, b) {
    let occurences = JSON.stringify(a).match((new RegExp(b, "g")));
    return occurences !== null ? occurences.length : 0;
}