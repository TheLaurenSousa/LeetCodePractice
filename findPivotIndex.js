var nums = [1,7,3,6,5,6];

var pivotIndex = function(nums) {
    rightSum = 0;
    leftSum = 0;

    nums.forEach(v => rightSum +=v);

    for(var i=0; i<=nums.length-1; i++){
        rightSum -= nums[i];
        if(leftSum === rightSum) return i;
        leftSum += nums[i];
    }
    return -1;
};

console.log(pivotIndex(nums));