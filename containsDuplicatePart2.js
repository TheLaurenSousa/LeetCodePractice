var nums = [1,2,3,1,2,3];

var containsNearbyDuplicate = function(nums, k) {
    var map = new Map();
    for(var i=0; i<nums.length; i++){
        if (i - map.get(nums[i]) <= k){
            return true
        }
        map.set(nums[i], i);
    }
    return false
};

console.log(containsNearbyDuplicate(nums));