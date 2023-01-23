var s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
    if(s.length === 0) return 0;
    if(s.length === 1) return 1;
    
    var set = new Set();
    var runner = 0;
    var max = 0;

    for(var i=0; i<s.length; i++){
        while(set.has(s[i])){
            set.delete(s[runner])
            runner++;
        }
        set.add(s[i]);
        max = Math.max(max, i-runner+1);
    }
    return max;
};

console.log(lengthOfLongestSubstring(s));