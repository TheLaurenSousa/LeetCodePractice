var nums = [1,2,3,1];
var indexDiff = 3;
var valueDiff = 0;

var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for (var i=0; i<nums.length; i++){
        for(var j=i+1; j<=i+indexDiff; j++){
            if(Math.abs(nums[i]-nums[j])<=valueDiff){
                return true;
            }
        }
    }
    return false;
};

console.log(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));