var nums = [1,2,3,4,5,6,7];
var k = 3;

var rotate = function(nums, k) {
    if(nums.length === 1 || k === 0 || k % nums.length === 0){
        return;
    }
    if (k > nums.length){
        k = k % nums.length;
    }
    nums.unshift(...nums.splice(-k));
    return nums;
};

console.log(rotate(nums, k));