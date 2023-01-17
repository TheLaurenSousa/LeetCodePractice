var nums = [2,2,1];

var singleNumber = function(nums) {
    return nums.reduce((a,b) => a^=b);
};

console.log(singleNumber(nums));
