var nums = [1,2,3,4];

var runningSum = function(nums) {
    currentSum = 0;
    for(var i=0; i<nums.length; i++){
        nums[i] += currentSum;
        currentSum = nums[i];
    }
    return nums;
};

console.log(runningSum(nums));