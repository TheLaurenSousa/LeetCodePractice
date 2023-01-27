var s = "abccccdd";

var longestPalindrome = function(s) {
    var counter = 0;
    var tracker = {};
    for(var letter of s){
        tracker[letter] = (tracker[letter] || 0) +1;
        if(tracker[letter] %2 === 0){
            counter +=2;
        }
    }
    return s.length > counter ? counter +1 : counter;
};

console.log(longestPalindrome(s));