var s = "A man, a plan, a canal: Panama";

var isPalindrome = function(s){
    s = s.toLowerCase();
    console.log(s);
    s = s.replace(/[^A-Za-z0-9]/g, '');
    console.log(s);
    var start = 0;
    var end = s.length-1;
    while(start < end){
        if(s[start] != s[end]) return false;
        start++
        end--;
    }
    return true;
}

console.log(isPalindrome(s));