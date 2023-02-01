var n = 5;

var climbStairs = function(n) {
    if(n === 0 || n === 1 || n === 2){
        return n;
    }
    a = b = 1
    while (n--){
        a = (b += a) - a
    }
    return a
};

console.log(climbStairs(n));