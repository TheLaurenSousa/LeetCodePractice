var s = ["h","e","l","l","o"];

var reverseString = function(s) {
    var left = 0;
    var right = s.length-1;
    while(left < right){
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};

console.log(reverseString(s));