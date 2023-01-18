var nums = [-4,-1,0,3,10];

var sortedSquares = function(nums) {
    for(var i=0; i<nums.length; i++){
        nums[i] = nums[i] * nums[i];
    }
    var output = nums.sort(function(a,b){
        return a-b;
    });
    return output;
};

console.log(sortedSquares(nums));