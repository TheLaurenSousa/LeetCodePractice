var numbers = [2,7,11,15];
var target = 9;

var twoSum = function(numbers, target) {
    var left = 0;
    var right = numbers.length-1;
    while (left < right){
        var sum = numbers[left] + numbers[right];
        if (sum === target){
            return [left+1, right+1];
        }
        if (sum > target){
            right--;
            continue;
        }
        left ++;
    }
};

console.log(twoSum(numbers, target));