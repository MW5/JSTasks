function findMax(a)
{
    arguments = Array.prototype.slice.call(arguments);
    return arguments.sort((function(a, b){return a-b}))[arguments.length-1];
}