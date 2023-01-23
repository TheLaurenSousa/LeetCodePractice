var s = "abc";
var t = "ahbgdc";

var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;
    var subsequence = 0;
    for(var i=0; i<t.length; i++)
        if(s[subsequence] === t[i])
            subsequence++;
        
    
    return subsequence === s.length;
};

console.log(isSubsequence(s,t));