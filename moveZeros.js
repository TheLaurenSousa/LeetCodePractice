var nums = [0,1,0,3,12];

var moveZeroes = function(nums) {
    var j = 0;
    var i = 1;
    while(i <nums.length){
        if(nums[j] === 0 && nums[i] != 0){
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        } else if(nums[j] !== 0) {
            j++;
        }
        i++;
    }
    return nums;
};

console.log(moveZeroes(nums));