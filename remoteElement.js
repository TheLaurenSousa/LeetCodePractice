var nums = [3,2,2,3];
var val = 3;

var removeElement = function(nums, val) {
    var k = 0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]!=val) {
            nums[k++] = nums[i];
        }
    }
    return k;
}

console.log(removeElement(nums, val));