var nums = [1,2,3,1];

var containsDuplicate = function(nums) {
    return new Set(nums).size != nums.length;
};

console.log(containsDuplicate(nums));