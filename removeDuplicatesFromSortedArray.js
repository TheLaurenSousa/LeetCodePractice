var nums = [0,0,1,1,1,2,2,3,3,4];

var removeDuplicates = function(nums) {
    var count = 1;
    for(var i = 1; i < nums.length; i++){
        if(nums[i - 1] != nums[i]){  
            nums[count] = nums[i];  
            count+=1; 
        }
    }
    return count;
};

console.log(removeDuplicates(nums));