var digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

var plusOne = function(digits) {
    var intify = BigInt(digits.join(''));
    var result = BigInt(intify) + BigInt(1);
    var output = Array.from(String(result), Number);
    return output;
};

console.log(plusOne(digits));