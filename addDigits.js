var num = 38;

var addDigits = function(num) {
    if(num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

console.log(addDigits(num));