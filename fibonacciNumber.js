var n = 5;

var fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    var sequence = [0,1];
    for(var i = 2; i < n+2; i++){
        sequence.push(sequence[i-1]+sequence[i-2]);
    }
    return sequence[n];
};

console.log(fib(n));