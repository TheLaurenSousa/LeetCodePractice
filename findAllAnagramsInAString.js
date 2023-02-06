var s = "cbaebabacd";
var p = "abc";

var findAnagrams = function(s, p) {
    var output = [];
    var chars = {};

    for (let character of p){
        if (character in chars){
            chars[character]++
        } else{
            chars[character] = 1
        }
    }

    var left = 0;
    var right = 0;
    var count = p.length;

    while(right < s.length){
        if(chars[s[right]] > 0) count--;
        chars[s[right]]--;
        right++;
        if(count === 0) output.push(left);
        if(right - left === p.length){
            if(chars[s[left]] >=  0) count++;
            chars[s[left]]++;
            left++;
        }
    }
    return output;
};