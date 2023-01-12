var nums = [1,3,5,6];
var target = 5;

var searchInsert = function(nums, target) {
    for(var i = 0; i<nums.length; i++){
        if(nums[i] === target){
            return i;
        } else if(nums[nums.length-1] < target){
            return nums.length;
        } else if (i > 0 && nums[i] > target && nums[i-1] < target){
            return i;
        } else if (nums[0] > target){
            return 0;
        }
    }
};

console.log(searchInsert(nums, target));